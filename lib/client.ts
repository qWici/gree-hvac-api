import {
    ClientOptions,
    RequestBody,
    SocketRequest,
    State,
} from "./defenitions";
import * as dgram from "dgram";
import {
    BindingDecryptionResult,
    EncryptionService,
    HandshakeResponseDecryptionResult,
    StatusResponseDecryptionResult, UpdateResponseDecryptionResult
} from "./encryption";
import {PropertyTransformer, VENDOR_PROPS} from "./property-transformer";
import {stateDiff} from "./utils/stateDiff";
import {validateOptions} from "./utils/validateOptions";
import {ClientEventEmitter} from "./client-event-emitter";

export class Client extends ClientEventEmitter {
    private readonly _options: ClientOptions;

    /**
     * Device MAC-address
     *
     * @private
     */
    private _cid: string | null = null;

    /**
     * Socket connection
     *
     * @private
     */
    private readonly _socket: dgram.Socket | null = null;

    /**
     * Socket connection timeout reference
     *
     * @private
     */
    private _socketTimeoutRef: NodeJS.Timeout | null = null;

    /**
     * Status polling interval reference
     *
     * @private
     */
    private _statusIntervalRef: NodeJS.Timer | null = null;

    /**
     * Status polling timeout reference
     *
     * @private
     */
    private _statusTimeoutRef: NodeJS.Timeout | null = null;

    /**
     * Used for transform values and props in two ways - to vendor and from vendor
     *
     * @private
     */
    private readonly _transformer = new PropertyTransformer();

    /**
     * Device state
     *
     * @private
     */
    private _state: Partial<State> = {};

    /**
     * Used for encrypt/decrypt packages
     *
     * @private
     */
    private readonly _encryptionService = new EncryptionService();

    constructor(options: ClientOptions) {
        super();

        validateOptions(options);

        this._options = Object.assign(defaultOptions, options)

        this._trace('OPTIONS', this._options);

        this._socket = dgram.createSocket('udp4');

        if (this._options.autoConnect) {
            this.connect();
        }
    }

    /**
     * Connect to a HVAC device and start polling status changes by default
     */
    public connect(callback?: () => void): void {
        this._socket.on('message', message => this._handleResponse(message));

        this._socket.bind(() => {
            this._socket.setBroadcast(true);
            this._socketSend({t: 'scan'});

            this._socketTimeoutRef = setTimeout(() => {
                this._trace('SOCKET', 'Unable to connect. Retrying...');
                this.disconnect();
                this.connect();
            }, this._options.connectTimeout);

            if (callback) {
                callback();
            }
        });
    }

    public async connectAsync(): Promise<Client> {
        return new Promise((res, rej) => {
            try {
                this.connect(() => { res(this) })
            } catch (e) {
                rej(e)
            }
        })
    }

    /**
     * Disconnect from a HVAC device and stop status polling
     */
    public disconnect() {
        if (this._statusIntervalRef) {
            clearInterval(this._statusIntervalRef);
        }
        if (this._socketTimeoutRef) {
            clearTimeout(this._socketTimeoutRef);
        }
        if (this._statusTimeoutRef) {
            clearTimeout(this._statusTimeoutRef);
        }
        this._socket.close();
        this._emit('disconnect');
    }

    public setProperties(state: Partial<Omit<State, 'currentTemperature'>>) {
        const vendorProperties = this._transformer.toVendor(state);
        console.log({ vendorProperties })
        this._sendRequest({
            opt: Object.keys(vendorProperties),
            p: Object.values(vendorProperties),
            t: 'cmd'
        });
    }

    public setProperty<O extends State, K extends keyof O>(key: K, value: O[K]) {
        let properties = {
            [key]: value
        };
        this.setProperties(properties);
    }


    private _sendBindRequest() {
        this._socketSend({
            cid: 'app',
            i: 1,
            t: 'pack',
            uid: 0,
            pack: this._encryptionService.encrypt({
                mac: this._cid,
                t: 'bind',
                uid: 0
            })
        });
    }

    private _sendRequest(body: RequestBody) {
        this._trace('OUT.MSG', body, this._encryptionService.getKey());
        this._socketSend({
            cid: 'app',
            i: 0,
            t: 'pack',
            uid: 0,
            pack: this._encryptionService.encrypt(body)
        });
    };

    private _requestStatus() {
        this._sendRequest({
            cols: VENDOR_PROPS,
            mac: this._cid,
            t: 'status'
        });

        this._statusTimeoutRef = setTimeout(() => {
            this._state = {};
            this._emit('no_response');
        }, this._options.pollingTimeout);
    }

    /**
     * Handle UDP response from device
     *
     * @private
     */
    private _handleResponse(buffer: Buffer) {
        const jsonBuffer =  buffer + '';

        let message;
        try {
            message = JSON.parse(jsonBuffer);
        } catch (e) {
            this._trace('IN.MSG.BUFFER', jsonBuffer);
            console.error('IN.MSG: Can not parse device JSON response:', {exception: e, jsonBuffer});
            return;
        }

        this._trace('IN.MSG', message);

        // Extract encrypted package from message using device key (if available)
        const pack = this._encryptionService.decrypt(message);
        this._trace('IN.MSG.UNPACK', pack);

        // If package type is response to handshake
        if (pack.t === 'dev') {
            return this._handleHandshakeResponse(pack);
        }

        if (this._cid) {
            // If package type is binding confirmation
            if (pack.t === 'bindok') {
                return this._handleBindingConfirmationResponse(pack);
            }

            // If package type is device status
            if (pack.t === 'dat') {
                return this._handleStatusResponse(pack);
            }

            // If package type is response, update device properties
            if (pack.t === 'res') {
                return this._handleUpdateConfirmResponse(pack);
            }
        }

        this._trace('IN.MSG', 'Unknown message', pack.t, message, pack)
    }

    /**
     * Send a request to device thorough UPD socket
     *
     * @private
     */
    private _socketSend(request: SocketRequest) {
        this._trace('SOCKET.SEND', request);
        const toSend = Buffer.from(JSON.stringify(request));
        this._socket.send(toSend, 0, toSend.length, this._options.port, this._options.host);
    }

    private _handleHandshakeResponse(data: HandshakeResponseDecryptionResult) {
        this._cid = data.cid || data.mac;
        this._sendBindRequest();
    }

    private _handleBindingConfirmationResponse(pack: BindingDecryptionResult) {
        this._trace('SOCKET', 'Connected to device', this._options.host);
        clearTimeout(this._socketTimeoutRef);

        this._encryptionService.setKey(pack.key);

        this._requestStatus();
        if (this._options.poll) {
            this._statusIntervalRef = setInterval(() => this._requestStatus(), this._options.pollingInterval);
        }

        this._emit('connect');
    }

    private _handleStatusResponse(pack: StatusResponseDecryptionResult) {
        clearTimeout(this._statusTimeoutRef);

        const currentState = { ...this._state };
        let newProperties = {};
        pack.cols.forEach((col, i) => {
            const transformed = this._transformer.fromVendor({ [col]: pack.dat[i] })
            const key = Object.keys(transformed)[0];
            newProperties[key] = transformed[key];
        });

        const updatedState = stateDiff(currentState, newProperties);

        this._emit('update', updatedState);
    }

    private _handleUpdateConfirmResponse(pack: UpdateResponseDecryptionResult) {
        const updatedProperties = {};
        pack.opt.forEach((opt, i) => {
            const transformed = this._transformer.fromVendor({ [opt]: pack.val[i] })
            const key = Object.keys(transformed)[0];
            updatedProperties[key] = transformed[key];
        });

        this._emit('success', updatedProperties);
    }

    private _trace(...args: any) {
        if (!this._options.debug) {
            return;
        }

        console.debug('>>> cid:' + this._cid + ': ' + (new Date).toLocaleString());
        console.debug.apply(null, args);
    }
}

const defaultOptions: Partial<ClientOptions> = {
    port: 7000,
    connectTimeout: 3000,
    autoConnect: true,
    poll: true,
    pollingInterval: 3000,
    pollingTimeout: 1000,
    debug: false
}

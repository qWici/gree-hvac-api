"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const dgram = require("dgram");
const encryption_1 = require("./encryption");
const property_transformer_1 = require("./property-transformer");
const stateDiff_1 = require("./utils/stateDiff");
const validateOptions_1 = require("./utils/validateOptions");
const client_event_emitter_1 = require("./client-event-emitter");
class Client extends client_event_emitter_1.ClientEventEmitter {
    constructor(options) {
        super();
        /**
         * Device MAC-address
         *
         * @private
         */
        this._cid = null;
        /**
         * Socket connection
         *
         * @private
         */
        this._socket = null;
        /**
         * Socket connection timeout reference
         *
         * @private
         */
        this._socketTimeoutRef = null;
        /**
         * Status polling interval reference
         *
         * @private
         */
        this._statusIntervalRef = null;
        /**
         * Status polling timeout reference
         *
         * @private
         */
        this._statusTimeoutRef = null;
        /**
         * Used for transform values and props in two ways - to vendor and from vendor
         *
         * @private
         */
        this._transformer = new property_transformer_1.PropertyTransformer();
        /**
         * Device state
         *
         * @private
         */
        this._state = {};
        /**
         * Used for encrypt/decrypt packages
         *
         * @private
         */
        this._encryptionService = new encryption_1.EncryptionService();
        (0, validateOptions_1.validateOptions)(options);
        this._options = Object.assign(defaultOptions, options);
        this._trace('OPTIONS', this._options);
        this._socket = dgram.createSocket('udp4');
        if (this._options.autoConnect) {
            this.connect();
        }
    }
    /**
     * Connect to a HVAC device and start polling status changes by default
     */
    connect() {
        this._socket.on('message', message => this._handleResponse(message));
        this._socket.bind(() => {
            this._socket.setBroadcast(true);
            this._socketSend({ t: 'scan' });
            this._socketTimeoutRef = setTimeout(() => {
                this._trace('SOCKET', 'Unable to connect. Retrying...');
                this.disconnect();
                this.connect();
            }, this._options.connectTimeout);
        });
    }
    /**
     * Disconnect from a HVAC device and stop status polling
     */
    disconnect() {
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
    setProperties(state) {
        const vendorProperties = this._transformer.toVendor(state);
        console.log({ vendorProperties });
        this._sendRequest({
            opt: Object.keys(vendorProperties),
            p: Object.values(vendorProperties),
            t: 'cmd'
        });
    }
    setProperty(key, value) {
        let properties = {
            [key]: value
        };
        this.setProperties(properties);
    }
    _sendBindRequest() {
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
    _sendRequest(body) {
        this._trace('OUT.MSG', body, this._encryptionService.getKey());
        this._socketSend({
            cid: 'app',
            i: 0,
            t: 'pack',
            uid: 0,
            pack: this._encryptionService.encrypt(body)
        });
    }
    ;
    _requestStatus() {
        this._sendRequest({
            cols: property_transformer_1.VENDOR_PROPS,
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
    _handleResponse(buffer) {
        const jsonBuffer = buffer + '';
        let message;
        try {
            message = JSON.parse(jsonBuffer);
        }
        catch (e) {
            this._trace('IN.MSG.BUFFER', jsonBuffer);
            console.error('IN.MSG: Can not parse device JSON response:', { exception: e, jsonBuffer });
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
        this._trace('IN.MSG', 'Unknown message', pack.t, message, pack);
    }
    /**
     * Send a request to device thorough UPD socket
     *
     * @private
     */
    _socketSend(request) {
        this._trace('SOCKET.SEND', request);
        const toSend = Buffer.from(JSON.stringify(request));
        this._socket.send(toSend, 0, toSend.length, this._options.port, this._options.host);
    }
    _handleHandshakeResponse(data) {
        this._cid = data.cid || data.mac;
        this._sendBindRequest();
    }
    _handleBindingConfirmationResponse(pack) {
        this._trace('SOCKET', 'Connected to device', this._options.host);
        clearTimeout(this._socketTimeoutRef);
        this._encryptionService.setKey(pack.key);
        this._requestStatus();
        if (this._options.poll) {
            this._statusIntervalRef = setInterval(() => this._requestStatus(), this._options.pollingInterval);
        }
        this._emit('connect');
    }
    _handleStatusResponse(pack) {
        clearTimeout(this._statusTimeoutRef);
        const currentState = Object.assign({}, this._state);
        let newProperties = {};
        pack.cols.forEach((col, i) => {
            const transformed = this._transformer.fromVendor({ [col]: pack.dat[i] });
            const key = Object.keys(transformed)[0];
            newProperties[key] = transformed[key];
        });
        const updatedState = (0, stateDiff_1.stateDiff)(currentState, newProperties);
        this._emit('update', updatedState);
    }
    _handleUpdateConfirmResponse(pack) {
        const updatedProperties = {};
        pack.opt.forEach((opt, i) => {
            const transformed = this._transformer.fromVendor({ [opt]: pack.val[i] });
            const key = Object.keys(transformed)[0];
            updatedProperties[key] = transformed[key];
        });
        this._emit('success', updatedProperties);
    }
    _trace(...args) {
        if (!this._options.debug) {
            return;
        }
        console.debug('>>> cid:' + this._cid + ': ' + (new Date).toLocaleString());
        console.debug.apply(null, args);
    }
}
exports.Client = Client;
const defaultOptions = {
    port: 7000,
    connectTimeout: 3000,
    autoConnect: true,
    poll: true,
    pollingInterval: 3000,
    pollingTimeout: 1000,
    debug: false
};

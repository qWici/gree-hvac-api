import { ClientOptions, State } from "./defenitions";
import { ClientEventEmitter } from "./client-event-emitter";
export declare class Client extends ClientEventEmitter {
    private readonly _options;
    /**
     * Device MAC-address
     *
     * @private
     */
    private _cid;
    /**
     * Socket connection
     *
     * @private
     */
    private readonly _socket;
    /**
     * Socket connection timeout reference
     *
     * @private
     */
    private _socketTimeoutRef;
    /**
     * Status polling interval reference
     *
     * @private
     */
    private _statusIntervalRef;
    /**
     * Status polling timeout reference
     *
     * @private
     */
    private _statusTimeoutRef;
    /**
     * Used for transform values and props in two ways - to vendor and from vendor
     *
     * @private
     */
    private readonly _transformer;
    /**
     * Device state
     *
     * @private
     */
    private _state;
    /**
     * Used for encrypt/decrypt packages
     *
     * @private
     */
    private readonly _encryptionService;
    constructor(options: ClientOptions);
    /**
     * Connect to a HVAC device and start polling status changes by default
     */
    connect(callback?: () => void): void;
    connectAsync(): Promise<Client>;
    /**
     * Disconnect from a HVAC device and stop status polling
     */
    disconnect(): void;
    setProperties(state: Partial<Omit<State, 'currentTemperature'>>): void;
    setProperty<O extends State, K extends keyof O>(key: K, value: O[K]): void;
    private _sendBindRequest;
    private _sendRequest;
    private _requestStatus;
    /**
     * Handle UDP response from device
     *
     * @private
     */
    private _handleResponse;
    /**
     * Send a request to device thorough UPD socket
     *
     * @private
     */
    private _socketSend;
    private _handleHandshakeResponse;
    private _handleBindingConfirmationResponse;
    private _handleStatusResponse;
    private _handleUpdateConfirmResponse;
    private _trace;
}

import {
    ClientEmptyCallback,
    ClientEventCallbacks,
    ClientSuccessCallback,
    ClientUpdateCallback,
    State
} from "../defenitions";

export class ClientEventEmitter {
    private _callbacks: ClientEventCallbacks = {
        connect: () => {},
        update: () => {},
        success: () => {},
        disconnect: () => {},
        no_response: () => {},
    }

    constructor() {}

    public on(event: "connect", callback: ClientEmptyCallback): void
    public on(event: "update", callback: ClientUpdateCallback): void
    public on(event: "success", callback: ClientSuccessCallback): void
    public on(event: "disconnect", callback: ClientEmptyCallback): void
    public on(event: "no_response", callback: ClientEmptyCallback): void
    public on(event: any, callback: any): void {
        this._callbacks[event] = callback;
    }

    protected _emit(event: "no_response", data?: any): void
    protected _emit(event: "connect", data?: any): void
    protected _emit(event: "success", data: Partial<State>): void
    protected _emit(event: "disconnect", data?: any): void
    protected _emit(event: "update", data: Partial<State>): void
    protected _emit(event: any, data: any): void {
        if (event === "update") {
            this._callbacks.update(data);
            return;
        }

        const func = this._callbacks[event]
        func();
    }
}

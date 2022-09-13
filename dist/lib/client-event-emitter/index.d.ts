import { ClientEmptyCallback, ClientSuccessCallback, ClientUpdateCallback, State } from "../defenitions";
export declare class ClientEventEmitter {
    private _callbacks;
    constructor();
    on(event: "connect", callback: ClientEmptyCallback): void;
    on(event: "update", callback: ClientUpdateCallback): void;
    on(event: "success", callback: ClientSuccessCallback): void;
    on(event: "disconnect", callback: ClientEmptyCallback): void;
    on(event: "no_response", callback: ClientEmptyCallback): void;
    protected _emit(event: "no_response", data?: any): void;
    protected _emit(event: "connect", data?: any): void;
    protected _emit(event: "success", data: Partial<State>): void;
    protected _emit(event: "disconnect", data?: any): void;
    protected _emit(event: "update", data: Partial<State>): void;
}

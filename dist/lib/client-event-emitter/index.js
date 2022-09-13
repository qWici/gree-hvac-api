"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEventEmitter = void 0;
class ClientEventEmitter {
    constructor() {
        this._callbacks = {
            connect: () => { },
            update: () => { },
            success: () => { },
            disconnect: () => { },
            no_response: () => { },
        };
    }
    on(event, callback) {
        this._callbacks[event] = callback;
    }
    _emit(event, data) {
        if (event === "update") {
            this._callbacks.update(data);
            return;
        }
        const func = this._callbacks[event];
        func();
    }
}
exports.ClientEventEmitter = ClientEventEmitter;

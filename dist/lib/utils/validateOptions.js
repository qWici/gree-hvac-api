"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
const validateOptions = (options) => {
    if (options.port) {
        if (options.port < 1 || options.port > 65535) {
            throw Error('Option port must be in range 1-65535');
        }
    }
    if (options.host) {
        const isIPValid = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(options.host);
        if (!isIPValid) {
            throw Error('Wrong host address');
        }
    }
    if (options.connectTimeout) {
        if (options.connectTimeout < 10) {
            throw Error('Option connectTimeout must be more than 10');
        }
    }
    if (options.pollingInterval) {
        if (options.pollingInterval < 10) {
            throw Error('Option pollingInterval must be more than 10');
        }
    }
    if (options.pollingTimeout) {
        if (options.pollingTimeout < 10) {
            throw Error('Option pollingTimeout must be more than 10');
        }
    }
};
exports.validateOptions = validateOptions;

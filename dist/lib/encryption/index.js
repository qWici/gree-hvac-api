"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionService = void 0;
const crypto = require("crypto");
class EncryptionService {
    constructor(key = "a3K8Bx%2r8Y7#xDh") {
        this._key = key;
    }
    setKey(key) {
        this._key = key;
    }
    getKey() {
        return this._key;
    }
    /**
     * Decrypt UDP message
     */
    decrypt(input) {
        const decipher = crypto.createDecipheriv('aes-128-ecb', this._key, '');
        const str = decipher.update(input.pack, 'base64', 'utf8');
        return JSON.parse(str + decipher.final('utf8'));
    }
    /**
     * Encrypt UDP message
     */
    encrypt(output) {
        const cipher = crypto.createCipheriv('aes-128-ecb', this._key, '');
        const str = cipher.update(JSON.stringify(output), 'utf8', 'base64');
        return str + cipher.final('base64');
    }
}
exports.EncryptionService = EncryptionService;

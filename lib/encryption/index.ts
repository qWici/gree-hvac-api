import * as crypto from "crypto";
import {VendorStateProps} from "../defenitions";

export class EncryptionService {
    private _key: AESKey;

    constructor(key: AESKey = "a3K8Bx%2r8Y7#xDh") {
        this._key = key;
    }

    public setKey(key: AESKey) {
        this._key = key;
    }

    public getKey() {
        return this._key;
    }

    /**
     * Decrypt UDP message
     */
    public decrypt(input: { pack: string }): DecryptionResult {
        const decipher = crypto.createDecipheriv('aes-128-ecb', this._key, '');
        const str = decipher.update(input.pack, 'base64', 'utf8');
        return JSON.parse(str + decipher.final('utf8'))
    }

    /**
     * Encrypt UDP message
     */
    public encrypt(output: Record<string | number, string | number>): string {
        const cipher = crypto.createCipheriv('aes-128-ecb', this._key, '');
        const str = cipher.update(JSON.stringify(output), 'utf8', 'base64');
        return str + cipher.final('base64')
    }
}

type AESKey = string;
export interface BindingDecryptionResult {
    t: 'bindok';
    key: string;
}
export interface StatusResponseDecryptionResult {
    t: 'dat';
    cols: VendorStateProps[];
    dat: (string | number)[];
}
export interface UpdateResponseDecryptionResult {
    t: 'res';
    opt: VendorStateProps[];
    val: (string | number)[];
}
export interface HandshakeResponseDecryptionResult {
    t: 'dev';
    cid?: string;
    mac?: string;
}

export type DecryptionResult = BindingDecryptionResult | StatusResponseDecryptionResult | UpdateResponseDecryptionResult
    | HandshakeResponseDecryptionResult;

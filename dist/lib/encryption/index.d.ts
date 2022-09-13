import { VendorStateProps } from "../defenitions";
export declare class EncryptionService {
    private _key;
    constructor(key?: AESKey);
    setKey(key: AESKey): void;
    getKey(): string;
    /**
     * Decrypt UDP message
     */
    decrypt(input: {
        pack: string;
    }): DecryptionResult;
    /**
     * Encrypt UDP message
     */
    encrypt(output: Record<string | number, string | number>): string;
}
declare type AESKey = string;
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
export declare type DecryptionResult = BindingDecryptionResult | StatusResponseDecryptionResult | UpdateResponseDecryptionResult | HandshakeResponseDecryptionResult;
export {};

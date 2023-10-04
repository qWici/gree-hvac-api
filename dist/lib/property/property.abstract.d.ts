import { State, VendorStateProps } from "../defenitions";
export declare abstract class PropertyAbstract {
    readonly clientKey: StatePropertyOptions['clientKey'];
    readonly vendorKey: StatePropertyOptions['vendorKey'];
    protected constructor(options: StatePropertyOptions);
    abstract toVendor(value: ClientValue): VendorValue | never;
    abstract fromVendor(value: VendorValue): ClientValue | never;
}
export declare type ClientValue = string | number;
export declare type VendorValue = number;
export interface StatePropertyOptions {
    clientKey: keyof State;
    vendorKey: VendorStateProps;
    valuesRelationship: Record<ClientValue, VendorValue>;
}

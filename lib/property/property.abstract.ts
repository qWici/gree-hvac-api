import {State, VendorStateProps} from "../defenitions";

export abstract class PropertyAbstract {
    public readonly clientKey: StatePropertyOptions['clientKey'];
    public readonly vendorKey: StatePropertyOptions['vendorKey'];

    protected constructor(options: StatePropertyOptions) {}

    public abstract toVendor(value: ClientValue): VendorValue | never;
    public abstract fromVendor(value: VendorValue): ClientValue | never;
}


export type ClientValue = string | number;
export type VendorValue = number;
export interface StatePropertyOptions {
    clientKey: keyof State;
    vendorKey: VendorStateProps;
    valuesRelationship: Record<ClientValue, VendorValue>;
}

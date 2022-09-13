import { ClientValue, PropertyAbstract, StatePropertyOptions, VendorValue } from "./property.abstract";
export declare class RawValueProp extends PropertyAbstract {
    readonly clientKey: StatePropertyOptions['clientKey'];
    readonly vendorKey: StatePropertyOptions['vendorKey'];
    constructor(options: Omit<StatePropertyOptions, 'valuesRelationship'>);
    toVendor(value: ClientValue): number;
    fromVendor(value: VendorValue): number;
}

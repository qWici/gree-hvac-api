import { ClientValue, PropertyAbstract, StatePropertyOptions, VendorValue } from "./property.abstract";
export declare class StateProperty extends PropertyAbstract {
    readonly clientKey: StatePropertyOptions['clientKey'];
    readonly vendorKey: StatePropertyOptions['vendorKey'];
    private readonly _clientValuesRelationship;
    private readonly _vendorValuesRelationship;
    constructor(options: StatePropertyOptions);
    toVendor(value: ClientValue): number;
    fromVendor(value: VendorValue): number;
    private static _swapValueRelationships;
}

import {ClientValue, PropertyAbstract, StatePropertyOptions, VendorValue} from "./property.abstract";

export class RawValueProp extends PropertyAbstract{
    public readonly clientKey: StatePropertyOptions['clientKey'];
    public readonly vendorKey: StatePropertyOptions['vendorKey'];

    constructor(options: Omit<StatePropertyOptions, 'valuesRelationship'>) {
        super({ ...options, valuesRelationship: {} });

        this.vendorKey = options.vendorKey;
        this.clientKey = options.clientKey;
    }

    public toVendor(value: ClientValue) {
        return Number(value);
    }

    public fromVendor(value: VendorValue) {
        return value;
    }
}


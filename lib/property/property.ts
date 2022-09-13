import {ClientValue, PropertyAbstract, StatePropertyOptions, VendorValue} from "./property.abstract";

export class StateProperty extends PropertyAbstract{
    public readonly clientKey: StatePropertyOptions['clientKey'];
    public readonly vendorKey: StatePropertyOptions['vendorKey'];
    private readonly _clientValuesRelationship: StatePropertyOptions['valuesRelationship'];
    private readonly _vendorValuesRelationship: StatePropertyOptions['valuesRelationship'];

    constructor(options: StatePropertyOptions) {
        super(options);

        this.vendorKey = options.vendorKey;
        this.clientKey = options.clientKey;
        this._clientValuesRelationship = options.valuesRelationship;
        this._vendorValuesRelationship = StateProperty._swapValueRelationships(options.valuesRelationship);
    }

    public toVendor(value: ClientValue) {
        if (Object.keys(this._clientValuesRelationship).length === 0) {
            return Number(value);
        }

        return this._clientValuesRelationship[value];
    }

    public fromVendor(value: VendorValue) {
        if (Object.keys(this._vendorValuesRelationship).length === 0) {
            return value;
        }

        return this._vendorValuesRelationship[value];
    }

    private static _swapValueRelationships(relationships: StatePropertyOptions['valuesRelationship']) {
        if (Object.keys(relationships).length === 0) {
            return relationships;
        }

        const swapped = Object.entries(relationships).map(
            ([key, value]) => [value, key]
        );

        return Object.fromEntries(swapped);
    }
}


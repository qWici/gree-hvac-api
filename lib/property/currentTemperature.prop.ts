import {ClientValue, PropertyAbstract, StatePropertyOptions, VendorValue} from "./property.abstract";

export class CurrentTemperatureProp extends PropertyAbstract{
    public readonly clientKey: StatePropertyOptions['clientKey'];
    public readonly vendorKey: StatePropertyOptions['vendorKey'];

    constructor(options: Omit<StatePropertyOptions, 'valuesRelationship'>) {
        super({ ...options, valuesRelationship: {} });

        this.vendorKey = options.vendorKey;
        this.clientKey = options.clientKey;
    }

    public toVendor(value: ClientValue): never {
        throw new Error(`Cannot set read-only property currentTemperature`);
    }

    public fromVendor(value: VendorValue) {
        if (typeof value !== "number") {
            return value;
        }

        // Temperature from the AC should be transformed by subtract 40 to get real temperature
        // AC returns temperature+40. I believe it's because it has unsigned data type
        // When TemSen=0 it likely means the devices does not support the feature
        // @see https://github.com/ddenisyuk/homebridge-gree-heatercooler/blob/3979fc6dad9d1935c59c686eb1764a062246ee7c/index.js#L224-L226
        if (value !== 0) {
            value -= 40
        }

        return value;
    }
}


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentTemperatureProp = void 0;
const property_abstract_1 = require("./property.abstract");
class CurrentTemperatureProp extends property_abstract_1.PropertyAbstract {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { valuesRelationship: {} }));
        this.vendorKey = options.vendorKey;
        this.clientKey = options.clientKey;
    }
    toVendor(value) {
        throw new Error(`Cannot set read-only property currentTemperature`);
    }
    fromVendor(value) {
        if (typeof value !== "number") {
            return value;
        }
        // Temperature from the AC should be transformed by subtract 40 to get real temperature
        // AC returns temperature+40. I believe it's because it has unsigned data type
        // When TemSen=0 it likely means the devices does not support the feature
        // @see https://github.com/ddenisyuk/homebridge-gree-heatercooler/blob/3979fc6dad9d1935c59c686eb1764a062246ee7c/index.js#L224-L226
        if (value !== 0) {
            value -= 40;
        }
        return value;
    }
}
exports.CurrentTemperatureProp = CurrentTemperatureProp;

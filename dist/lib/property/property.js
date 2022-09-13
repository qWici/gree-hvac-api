"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateProperty = void 0;
const property_abstract_1 = require("./property.abstract");
class StateProperty extends property_abstract_1.PropertyAbstract {
    constructor(options) {
        super(options);
        this.vendorKey = options.vendorKey;
        this.clientKey = options.clientKey;
        this._clientValuesRelationship = options.valuesRelationship;
        this._vendorValuesRelationship = StateProperty._swapValueRelationships(options.valuesRelationship);
    }
    toVendor(value) {
        if (Object.keys(this._clientValuesRelationship).length === 0) {
            return Number(value);
        }
        return this._clientValuesRelationship[value];
    }
    fromVendor(value) {
        if (Object.keys(this._vendorValuesRelationship).length === 0) {
            return value;
        }
        return this._vendorValuesRelationship[value];
    }
    static _swapValueRelationships(relationships) {
        if (Object.keys(relationships).length === 0) {
            return relationships;
        }
        const swapped = Object.entries(relationships).map(([key, value]) => [value, key]);
        return Object.fromEntries(swapped);
    }
}
exports.StateProperty = StateProperty;

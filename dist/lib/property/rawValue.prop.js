"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawValueProp = void 0;
const property_abstract_1 = require("./property.abstract");
class RawValueProp extends property_abstract_1.PropertyAbstract {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { valuesRelationship: {} }));
        this.vendorKey = options.vendorKey;
        this.clientKey = options.clientKey;
    }
    toVendor(value) {
        return Number(value);
    }
    fromVendor(value) {
        return value;
    }
}
exports.RawValueProp = RawValueProp;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VENDOR_PROPS = exports.PropertyTransformer = void 0;
const property_1 = require("../property/property");
const currentTemperature_prop_1 = require("../property/currentTemperature.prop");
const rawValue_prop_1 = require("../property/rawValue.prop");
const properties_data_1 = require("../property/properties.data");
/**
 * Transforms device properties from vendor names to human friendly names and back
 */
class PropertyTransformer {
    constructor() {
        this._properties = [];
        this._generateProps();
    }
    fromVendor(props) {
        const result = {};
        for (const prop in props) {
            const instance = this._properties.find((item) => item.vendorKey === prop);
            if (instance) {
                result[instance.clientKey] = instance.fromVendor(props[prop]);
            }
        }
        return result;
    }
    toVendor(state) {
        const result = {};
        for (const prop in state) {
            const instance = this._properties.find((item) => item.clientKey === prop);
            if (instance) {
                result[instance.vendorKey] = instance.toVendor(state[prop]);
            }
        }
        return result;
    }
    _generateProps() {
        properties_data_1.APP_PROPERTIES.map((opts) => {
            this._properties.push(new property_1.StateProperty(opts));
        });
        this._properties.push(new rawValue_prop_1.RawValueProp({ clientKey: "temperature", vendorKey: 'SetTem' }));
        this._properties.push(new currentTemperature_prop_1.CurrentTemperatureProp({ clientKey: "currentTemperature", vendorKey: 'TemSen' }));
    }
}
exports.PropertyTransformer = PropertyTransformer;
exports.VENDOR_PROPS = [
    'Pow', 'Mod', 'TemUn', 'SetTem', 'TemSen', 'WdSpd', 'Air', 'Blo', 'Health', 'SwhSlp', 'Lig', 'SwingLfRig',
    'SwUpDn', 'Quiet', 'Tur', 'SvSt'
];

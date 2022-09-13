import {State, VendorStateProps} from "../defenitions";
import {StateProperty} from "../property/property";
import {PropertyAbstract, StatePropertyOptions} from "../property/property.abstract";
import {CurrentTemperatureProp} from "../property/currentTemperature.prop";
import {RawValueProp} from "../property/rawValue.prop";
import {APP_PROPERTIES} from "../property/properties.data";

/**
 * Transforms device properties from vendor names to human friendly names and back
 */
export class PropertyTransformer {
    private readonly _properties: PropertyAbstract[] = [];

    constructor() {
        this._generateProps();
    }

    public fromVendor(props: Partial<Record<VendorStateProps, string | number>>) {
        const result: Partial<State> = {};

        for (const prop in props) {
            const instance = this._properties.find((item) => item.vendorKey === prop);
            if (instance) {
                result[instance.clientKey] = instance.fromVendor(props[prop])
            }
        }

        return result;
    }

    public toVendor(state: Partial<State>) {
        const result: Partial<Record<VendorStateProps, string | number>> = {};

        for (const prop in state) {
            const instance = this._properties.find((item) => item.clientKey === prop);
            if (instance) {
                result[instance.vendorKey] = instance.toVendor(state[prop])
            }
        }

        return result;
    }

    private _generateProps() {
        APP_PROPERTIES.map((opts) => {
            this._properties.push(new StateProperty(opts))
        })

        this._properties.push(new RawValueProp(
            { clientKey: "temperature", vendorKey: 'SetTem' },
        ))

        this._properties.push(new CurrentTemperatureProp(
            { clientKey: "currentTemperature", vendorKey: 'TemSen' },
        ))
    }
}

export const VENDOR_PROPS = [
    'Pow', 'Mod', 'TemUn', 'SetTem', 'TemSen', 'WdSpd', 'Air', 'Blo', 'Health', 'SwhSlp', 'Lig', 'SwingLfRig',
    'SwUpDn', 'Quiet', 'Tur', 'SvSt'
]

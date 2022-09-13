import { State, VendorStateProps } from "../defenitions";
/**
 * Transforms device properties from vendor names to human friendly names and back
 */
export declare class PropertyTransformer {
    private readonly _properties;
    constructor();
    fromVendor(props: Partial<Record<VendorStateProps, string | number>>): Partial<State>;
    toVendor(state: Partial<State>): Partial<Record<VendorStateProps, string | number>>;
    private _generateProps;
}
export declare const VENDOR_PROPS: string[];

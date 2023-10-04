/**
 * Client options
 * @interface ClientOptions
 * @property {string} host GREE device ip-address (ex.: 192.168.1.255)
 * @property {number} port GREE device UDP port (ex.: 7000)
 * @property {number} connectTimeout Reconnect to device if no success timeout (ex.: 3000)
 * @property {boolean} autoConnect Automatically connect to device when client is created
 * @property {boolean} poll Poll device properties
 * @property {number} pollingInterval Device properties polling interval
 * @property {number} pollingTimeout Device properties polling timeout, emits "no_response" events in case of no
 * response from HVAC device for a status request
 * @property {boolean} debug Trace debug information
 */
export interface ClientOptions {
    host: string;
    port?: number;
    connectTimeout?: number;
    autoConnect?: boolean;
    poll?: boolean;
    pollingInterval?: number;
    pollingTimeout?: number;
    debug?: boolean;
}
interface SocketScanRequest {
    t: 'scan';
}
interface SocketPackRequest {
    cid: string;
    i: number;
    t: 'pack';
    uid: number;
    pack: string;
}
export declare type SocketRequest = SocketPackRequest | SocketScanRequest;
export declare type ClientEvent = "connect" | "update" | "success" | "disconnect" | "no_response";
export declare type ClientUpdateCallback = (state: Partial<State>) => void;
export declare type ClientSuccessCallback = (state: Partial<State>) => void;
export declare type ClientEmptyCallback = () => void;
export interface ClientEventCallbacks {
    connect: ClientEmptyCallback;
    update: ClientUpdateCallback;
    success: ClientSuccessCallback;
    disconnect: ClientEmptyCallback;
    no_response: ClientEmptyCallback;
}
export declare enum Power {
    "off" = "off",
    "on" = "on"
}
export declare enum Mode {
    "auto" = "auto",
    "cool" = "cool",
    "dry" = "dry",
    "fan_only" = "fan_only",
    "heat" = "heat"
}
export declare enum TemperatureUnit {
    "celsius" = "celsius",
    "fahrenheit" = "fahrenheit"
}
export declare enum FanSpeed {
    "auto" = "auto",
    "low" = "low",
    "mediumLow" = "mediumLow",
    "medium" = "medium",
    "mediumHigh" = "mediumHigh",
    "high" = "high"
}
export declare enum Air {
    "off" = "off",
    "inside" = "inside",
    "outside" = "outside",
    "mode3" = "mode3"
}
export declare enum Blow {
    "off" = "off",
    "on" = "on"
}
export declare enum Sleep {
    "off" = "off",
    "on" = "on"
}
export declare enum Health {
    "off" = "off",
    "on" = "on"
}
export declare enum Lights {
    "off" = "off",
    "on" = "on"
}
export declare enum SwingHor {
    'default' = "default",
    'full' = "full",
    'fixedLeft' = "fixedLeft",
    'fixedMidLeft' = "fixedMidLeft",
    'fixedMid' = "fixedMid",
    'fixedMidRight' = "fixedMidRight",
    'fixedRight' = "fixedRight",
    'fullAlt' = "fullAlt"
}
export declare enum SwingVert {
    'default' = "default",
    'full' = "full",
    'fixedTop' = "fixedTop",
    'fixedMidTop' = "fixedMidTop",
    'fixedMid' = "fixedMid",
    'fixedMidBottom' = "fixedMidBottom",
    'fixedBottom' = "fixedBottom",
    'swingBottom' = "swingBottom",
    'swingMidBottom' = "swingMidBottom",
    'swingMid' = "swingMid",
    'swingMidTop' = "swingMidTop",
    'swingTop' = "swingTop"
}
export declare enum Quiet {
    "off" = "off",
    "mode1" = "mode1",
    "mode2" = "mode2",
    "mode3" = "mode3"
}
export declare enum Turbo {
    "off" = "off",
    "on" = "on"
}
export declare enum PowerSave {
    "off" = "off",
    "on" = "on"
}
export interface State {
    power: Power;
    mode: Mode;
    temperatureUnit: TemperatureUnit;
    temperature: number;
    currentTemperature: any;
    fanSpeed: FanSpeed;
    air: Air;
    blow: Blow;
    sleep: Sleep;
    health: Health;
    lights: Lights;
    swingHor: SwingHor;
    swingVert: SwingVert;
    quiet: Quiet;
    turbo: Turbo;
    powerSave: PowerSave;
}
export declare type VendorStateProps = 'Pow' | 'Mod' | 'TemUn' | 'SetTem' | 'TemSen' | 'WdSpd' | 'Air' | 'Blo' | 'Health' | 'SwhSlp' | 'Lig' | 'SwingLfRig' | 'SwUpDn' | 'Quiet' | 'Tur' | 'SvSt';
interface SetPropertiesRequest {
    [index: string]: any;
    opt: string[];
    p: (string | number)[];
    t: 'cmd';
}
interface GetStatusRequest {
    [index: string]: any;
    cols: string[];
    mac: string;
    t: 'status';
}
export declare type RequestBody = SetPropertiesRequest | GetStatusRequest;
export {};

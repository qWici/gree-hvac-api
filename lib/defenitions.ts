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
    t: 'scan'
}
interface SocketPackRequest {
    cid: string;
    i: number;
    t: 'pack';
    uid: number;
    pack: string;
}
export type SocketRequest = SocketPackRequest | SocketScanRequest;

export type ClientEvent = "connect" | "update" | "success" | "disconnect" | "no_response"
export type ClientUpdateCallback = (state: Partial<State>) => void;
export type ClientSuccessCallback = (state: Partial<State>) => void;
export type ClientEmptyCallback = () => void;
export interface ClientEventCallbacks {
    connect: ClientEmptyCallback;
    update: ClientUpdateCallback;
    success: ClientSuccessCallback;
    disconnect: ClientEmptyCallback;
    no_response: ClientEmptyCallback;
}

export interface State {
    power: "off" | "on";
    mode: "auto" | "cool" | "dry" | "fan_only" | "heat";
    temperatureUnit: "celsius" | "fahrenheit";
    temperature: number;
    currentTemperature: any; // TODO
    fanSpeed: "auto" | "low" | "mediumLow" | "medium" | "mediumHigh" | "high";
    air: "off" | "inside" | "outside" | "mode3";
    blow: "off" | "on";
    sleep: "off" | "on";
    health: "off" | "on";
    lights: "off" | "on";
    swingHor: 'default' | 'full' | 'fixedLeft' | 'fixedMidLeft' | 'fixedMid' | 'fixedMidRight' | 'fixedRight' | 'fullAlt';
    swingVert: 'default' | 'full' | 'fixedTop' | 'fixedMidTop' | 'fixedMid' | 'fixedMidBottom' | 'fixedBottom' | 'swingBottom' | 'swingMidBottom' | 'swingMid' | 'swingMidTop' | 'swingTop';
    quiet: "off" | "mode1" | "mode2" | "mode3";
    turbo: "off" | "on";
    powerSave: "off" | "on";
}

export type ClientStateKeys = "power" | "mode" | "temperatureUnit" | "temperature" | "currentTemperature" | "fanSpeed"
    | "air" | "blow" | "sleep" | "health" | "lights" | "swingHor" | "swingVert" | "quiet" | "turbo" | "powerSave";

export type VendorStateProps = 'Pow' | 'Mod' | 'TemUn' | 'SetTem' | 'TemSen' | 'WdSpd' | 'Air' | 'Blo' | 'Health' | 'SwhSlp' | 'Lig' | 'SwingLfRig' | 'SwUpDn' | 'Quiet' | 'Tur' | 'SvSt';

interface SetPropertiesRequest {
    [index: string]: any;
    opt: string[],
    p: (string | number)[],
    t: 'cmd'
}

interface GetStatusRequest {
    [index: string]: any;
    cols: string[],
    mac: string,
    t: 'status'
}

export type RequestBody = SetPropertiesRequest | GetStatusRequest;

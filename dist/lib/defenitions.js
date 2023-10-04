"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerSave = exports.Turbo = exports.Quiet = exports.SwingVert = exports.SwingHor = exports.Lights = exports.Health = exports.Sleep = exports.Blow = exports.Air = exports.FanSpeed = exports.TemperatureUnit = exports.Mode = exports.Power = void 0;
var Power;
(function (Power) {
    Power["off"] = "off";
    Power["on"] = "on";
})(Power = exports.Power || (exports.Power = {}));
var Mode;
(function (Mode) {
    Mode["auto"] = "auto";
    Mode["cool"] = "cool";
    Mode["dry"] = "dry";
    Mode["fan_only"] = "fan_only";
    Mode["heat"] = "heat";
})(Mode = exports.Mode || (exports.Mode = {}));
var TemperatureUnit;
(function (TemperatureUnit) {
    TemperatureUnit["celsius"] = "celsius";
    TemperatureUnit["fahrenheit"] = "fahrenheit";
})(TemperatureUnit = exports.TemperatureUnit || (exports.TemperatureUnit = {}));
var FanSpeed;
(function (FanSpeed) {
    FanSpeed["auto"] = "auto";
    FanSpeed["low"] = "low";
    FanSpeed["mediumLow"] = "mediumLow";
    FanSpeed["medium"] = "medium";
    FanSpeed["mediumHigh"] = "mediumHigh";
    FanSpeed["high"] = "high";
})(FanSpeed = exports.FanSpeed || (exports.FanSpeed = {}));
var Air;
(function (Air) {
    Air["off"] = "off";
    Air["inside"] = "inside";
    Air["outside"] = "outside";
    Air["mode3"] = "mode3";
})(Air = exports.Air || (exports.Air = {}));
var Blow;
(function (Blow) {
    Blow["off"] = "off";
    Blow["on"] = "on";
})(Blow = exports.Blow || (exports.Blow = {}));
var Sleep;
(function (Sleep) {
    Sleep["off"] = "off";
    Sleep["on"] = "on";
})(Sleep = exports.Sleep || (exports.Sleep = {}));
var Health;
(function (Health) {
    Health["off"] = "off";
    Health["on"] = "on";
})(Health = exports.Health || (exports.Health = {}));
var Lights;
(function (Lights) {
    Lights["off"] = "off";
    Lights["on"] = "on";
})(Lights = exports.Lights || (exports.Lights = {}));
var SwingHor;
(function (SwingHor) {
    SwingHor["default"] = "default";
    SwingHor["full"] = "full";
    SwingHor["fixedLeft"] = "fixedLeft";
    SwingHor["fixedMidLeft"] = "fixedMidLeft";
    SwingHor["fixedMid"] = "fixedMid";
    SwingHor["fixedMidRight"] = "fixedMidRight";
    SwingHor["fixedRight"] = "fixedRight";
    SwingHor["fullAlt"] = "fullAlt";
})(SwingHor = exports.SwingHor || (exports.SwingHor = {}));
var SwingVert;
(function (SwingVert) {
    SwingVert["default"] = "default";
    SwingVert["full"] = "full";
    SwingVert["fixedTop"] = "fixedTop";
    SwingVert["fixedMidTop"] = "fixedMidTop";
    SwingVert["fixedMid"] = "fixedMid";
    SwingVert["fixedMidBottom"] = "fixedMidBottom";
    SwingVert["fixedBottom"] = "fixedBottom";
    SwingVert["swingBottom"] = "swingBottom";
    SwingVert["swingMidBottom"] = "swingMidBottom";
    SwingVert["swingMid"] = "swingMid";
    SwingVert["swingMidTop"] = "swingMidTop";
    SwingVert["swingTop"] = "swingTop";
})(SwingVert = exports.SwingVert || (exports.SwingVert = {}));
var Quiet;
(function (Quiet) {
    Quiet["off"] = "off";
    Quiet["mode1"] = "mode1";
    Quiet["mode2"] = "mode2";
    Quiet["mode3"] = "mode3";
})(Quiet = exports.Quiet || (exports.Quiet = {}));
var Turbo;
(function (Turbo) {
    Turbo["off"] = "off";
    Turbo["on"] = "on";
})(Turbo = exports.Turbo || (exports.Turbo = {}));
var PowerSave;
(function (PowerSave) {
    PowerSave["off"] = "off";
    PowerSave["on"] = "on";
})(PowerSave = exports.PowerSave || (exports.PowerSave = {}));

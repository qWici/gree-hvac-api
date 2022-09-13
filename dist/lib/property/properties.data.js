"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_PROPERTIES = void 0;
exports.APP_PROPERTIES = [
    { clientKey: "power", vendorKey: 'Pow', valuesRelationship: { 'off': 0, 'on': 1 } },
    { clientKey: "mode", vendorKey: 'Mod', valuesRelationship: { 'auto': 0, 'cool': 1, 'dry': 2, 'fan_only': 3, 'heat': 4 }
    },
    { clientKey: "temperatureUnit", vendorKey: 'TemUn', valuesRelationship: { 'celsius': 0, 'fahrenheit': 1 }
    },
    { clientKey: "fanSpeed", vendorKey: 'WdSpd', valuesRelationship: { 'auto': 0, 'low': 1, 'mediumLow': 2, 'medium': 3, 'mediumHigh': 4, 'high': 5 }
    },
    { clientKey: "air", vendorKey: 'Air', valuesRelationship: { 'off': 0, 'inside': 1, 'outside': 2, 'mode3': 3 } },
    { clientKey: "blow", vendorKey: 'Blo', valuesRelationship: { 'off': 0, 'on': 1 }
    },
    { clientKey: "health", vendorKey: 'Health', valuesRelationship: { 'off': 0, 'on': 1 } },
    { clientKey: "sleep", vendorKey: 'SwhSlp', valuesRelationship: { 'off': 0, 'on': 1 } },
    { clientKey: "lights", vendorKey: 'Lig', valuesRelationship: { 'off': 0, 'on': 1 } },
    { clientKey: "swingHor", vendorKey: 'SwingLfRig', valuesRelationship: {
            'default': 0, 'full': 1, 'fixedLeft': 2, 'fixedMidLeft': 3, 'fixedMid': 4, 'fixedMidRight': 5,
            'fixedRight': 6, "fullAlt": 7
        }
    },
    { clientKey: "swingVert", vendorKey: 'SwUpDn', valuesRelationship: {
            'default': 0, 'full': 1, 'fixedTop': 2, 'fixedMidTop': 3, 'fixedMid': 4, 'fixedMidBottom': 5,
            'fixedBottom': 6, "swingBottom": 7, "swingMidBottom": 8, "swingMid": 9, "swingMidTop": 10,
            "swingTop": 11
        }
    },
    { clientKey: "quiet", vendorKey: 'Quiet', valuesRelationship: { 'off': 0, 'mode1': 1, 'mode2': 2, 'mode3': 3 } },
    { clientKey: "turbo", vendorKey: 'Tur', valuesRelationship: { 'off': 0, 'on': 1 } },
    { clientKey: "powerSave", vendorKey: 'SvSt', valuesRelationship: { 'off': 0, 'on': 1 } },
];

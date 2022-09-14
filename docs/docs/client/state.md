---
sidebar_position: 5
---

# State

```typescript
export interface State {
    power: "off" | "on";
    mode: "auto" | "cool" | "dry" | "fan_only" | "heat";
    temperatureUnit: "celsius" | "fahrenheit";
    temperature: number;
    currentTemperature: number; // read-only
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
```

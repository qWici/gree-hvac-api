---
sidebar_position: 3
---

# Properties

## Setting properties

Single
```typescript
client.setProperty('temperature', 1)
```

Batch
```typescript
client.setProperties({
  power: 'on',
  temperature: 25
})
```

## List of properties 

### air
Fresh air valve

**type**:  `string`

**available values**:  `off, inside, outside, mode3`

```typescript
client.setProperty('air', 'inside')
```

### blow
Keeps the fan running for a while after shutting down (also called "X-Fan", only usable in Dry and Cool mode)

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('blow', 'on')
```

### currentTemperature
Get current temperature from the internal (?) sensor (This value can not be set, only received. HVAC must support this feature otherwise the value is 0)

**type**:  `number`

:::danger Carefully

This property read-only

:::

### fanspeed
Fan speed

**type**:  `string`

**available values**:  `auto, low, mediumLow, medium, mediumHigh, high`

```typescript
client.setProperty('fanspeed', 'low')
```

### health
Health ("Cold plasma") mode, only for devices equipped with "anion generator", which absorbs dust and kills bacteria

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('health', 'on')
```

### lights
Turns all indicators and the display on the unit on or off

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('lights', 'on')
```

### mode
Operation mode

**type**:  `string`

**available values**:  `auto, cool, heat, dry, fan_only`

```typescript
client.setProperty('mode', 'cool')
```
### power
Turn device on/off

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('power', 'on')
```

### powersave
Power Saving mode

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('powersave', 'on')
```

### quiet
Controls the Quiet mode which slows down the fan to its most quiet speed. Not available in Dry and Fan mode

**type**:  `string`

**available values**:  `off, mode1, mode2, mode3`

```typescript
client.setProperty('quiet', 'mode1')
```

### sleep
Sleep mode, which gradually changes the temperature in Cool, Heat and Dry mode

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('sleep', 'on')
```

### swinghor
Controls the swing mode of the horizontal air blades (not available on all units)

**type**:  `string`

**available values**:  `default, full, fixedLeft, fixedMidLeft, fixedMid, fixedMidRight, fixedRight`

```typescript
client.setProperty('swinghor', 'full')
```

### swingvert
Controls the swing mode of the vertical air blades

**type**:  `string`

**available values**:  `default, full, fixedTop, fixedMidTop, fixedMid, fixedMidBottom, fixedBottom, swingBottom, swingMidBottom, swingMid, swingMidTop, swingTop`

```typescript
client.setProperty('swingvert', 'full')
```

### temperature
Set temperature (must be together with temperature unit)

**type**:  `number`

```typescript
client.setProperty('temperature', 25)
```

### temperatureUnit
Temperature unit (must be together with set temperature)

**type**:  `string`

**available values**:  `celsius, fahrenheit`

```typescript
client.setProperty('temperatureUnit', 'celsius')
```

### turbo
Sets fan speed to the maximum. Fan speed cannot be changed while active and only available in Dry and Cool mode

**type**:  `string`

**available values**:  `off, on`

```typescript
client.setProperty('turbo', 'on')
```

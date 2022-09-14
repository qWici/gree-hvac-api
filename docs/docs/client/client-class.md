---
sidebar_position: 1
---

# Class

## new Client(options: ClientOptions)
Creates a new client, connect to device and start polling by default

## Types
```typescript 
ClientOptions {
    host: string;
    port?: number;
    connectTimeout?: number;
    autoConnect?: boolean;
    poll?: boolean;
    pollingInterval?: number;
    pollingTimeout?: number;
    debug?: boolean;
}
```

## Default options
```typescript
const defaultOptions: Partial<ClientOptions> = {
    port: 7000,
    connectTimeout: 3000,
    autoConnect: true,
    poll: true,
    pollingInterval: 3000,
    pollingTimeout: 1000,
    debug: false
}
```

## Options limitation
```shell
port: 1-65535
connectTimeout: >= 10
pollingTimeout: >= 10
```

## Option descriptions
### port
GREE device UDP port

**default:** `7000`

### connectTimeout
Reconnect to device if no success timeout

**default:** `3000`

### autoConnect
Automatically connect to device when client is created. Alternatively method connect() can be used.

**default:** `true`

### poll
Poll device properties

**default:** `true`

### pollingInterval
Device properties polling interval

**default:** `3000`

### pollingTimeout
Device properties polling timeout, emits no_response events in case of no response from HVAC device for a status request

**default:** `1000`

### debug
Trace debug information

**default:** `false`


---
sidebar_position: 2
---

# Connecting

## Event based
```typescript
import { Client } from "gree-hvac-api"

const client = new Client({ host: '192.168.7.60' });
// autoConnect by default is true or use client.connect();

client.on('connect', () => {
    client.setProperty('power', 'on');
    client.setProperty('temperature', 20);
});
```

## Async
```typescript
import { Client } from "gree-hvac-api"

// turn off autoConnect and connect when you need it
const client = new Client({ host: '192.168.7.60', autoConnect: false });

const main = async () => {
    const connected = await client.connectAsync();

    connected.setProperty('power', 'on');
    connected.setProperty('temperature', 20);
}

void main();
```

## Disconnect
```typescript
client.disconnect()

client.on('disconnect', () => {
    // device disconnected
});
```

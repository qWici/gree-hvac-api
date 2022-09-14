# Gree HVAC API
A client for communicating with Gree air conditioners

# Usage

First, you need to find out the IP address of your air conditioner in your
network. One of the easiest ways is to view the list of devices connected to
your router and find the air conditioner by excluding the devices you know.

## Connection

### Event based
```typescript
import { Client } from "gree-hvac-api"

const client = new Client({ host: '192.168.7.60' });

client.on('connect', () => {
    client.setProperty('power', 'on');
    client.setProperty('temperature', 20);
});
```

### Async
```typescript
import { Client } from "gree-hvac-api"

const client = new Client({ host: '192.168.7.60', autoConnect: false });

const main = async () => {
    const connected = await client.connectAsync();

    connected.setProperty('power', 'on');
    connected.setProperty('temperature', 20);
}

void main();
```


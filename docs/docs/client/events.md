---
sidebar_position: 4
---

# Events

State documented [here](/docs/client/state)

## On connect
Device successfully connected

```typescript
client.on('connect', () => {
    console.log('connected');
});
```

## On update
Client received update from AC

```typescript
client.on('update', (updatedState: Partial<State>) => {
    console.log('update', updatedState);
});
```

## On success
Client received success response on `setProperty()`

```typescript
client.on('success', (updatedProps: Partial<State>) => {
    console.log('success', updatedProps);
});
```

## On disconnect
Client disconnected from device

```typescript
client.on('disconnect', () => {
    console.log('disconnected');
});
```

## No response
If the client doesn't receive a response from the device after sending updating request - fire this event

```typescript
client.on('no_response', () => {
    console.log('no_response');
});
```

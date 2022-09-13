"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const client = new client_1.Client({ host: '10.0.0.102', debug: false });
client.on('update', (state) => {
    console.log('update', state);
});
client.on('connect', () => {
    console.log('connected');
    // client.setProperty('power', 'off');
});
client.on('disconnect', () => {
    console.log('disconnected');
});
client.on('no_response', () => {
    console.log('no_response');
});
// client.setProperty('temperature', 1);

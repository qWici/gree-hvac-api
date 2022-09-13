"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateDiff = void 0;
const stateDiff = (currentState, update) => {
    const result = {};
    for (const prop in update) {
        if (update[prop] !== currentState[prop]) {
            result[prop] = update[prop];
        }
    }
    return result;
};
exports.stateDiff = stateDiff;

import {State} from "../defenitions";

export const stateDiff = (currentState: Partial<State>, update: Record<string | number, any>): Partial<State> => {
    const result: Partial<State> = {};

    for (const prop in update) {
        if (update[prop] !== currentState[prop]) {
            result[prop] = update[prop]
        }
    }

    return result;
}

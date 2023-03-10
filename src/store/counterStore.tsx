import {createEvent, createStore} from "tiny-effector";

export const $counter = createStore(0);

export const inc = createEvent<number>();
export const dec = createEvent<number>();

$counter
    .on(inc, (state: number) => state + 1)
    .on(dec, (state: number) => state - 1)

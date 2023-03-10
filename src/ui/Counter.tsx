import React from 'react';
import {useStore} from "tiny-effector";
import {$counter, dec, inc} from "../store/counterStore";

export const Counter = () => {
    const counter = useStore($counter);


    return (
        <div>
            <hr />
            <p>Count: {counter}</p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    );
};
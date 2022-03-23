import React from 'react';
import { useCounter } from './Hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state, increment, reset, decrement } = useCounter(100);

    return (
        <>
            <h1>CounterWithCustomHook {state}</h1>
            <hr />

            <p>
                <button onClick={ () => increment(5) } className="btn btn-danger">+ 1</button>
            </p>
            <p>
                <button onClick={ reset } className="btn btn-danger">Reset</button>
            </p>
            <p>
                <button onClick={ () => decrement(5) } className="btn btn-danger">- 1</button>
            </p>
        </>
    )
}

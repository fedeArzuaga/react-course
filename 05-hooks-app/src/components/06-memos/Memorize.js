import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={ counter } /></h2>

            <button
                className="btn btn-success"
                onClick={increment}
            >
                +1
            </button>

            <button
                className='btn btn-danger ml-3'
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>

        </div>
    )
}

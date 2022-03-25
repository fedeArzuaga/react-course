import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../Hooks/useCounter';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const heavyProcessMemo = useMemo( () => heavyProcess(counter), [counter]);

    return (
        <div>
            {/* <h1>Memorize</h1> */}
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>

            <p> { heavyProcessMemo } </p>

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

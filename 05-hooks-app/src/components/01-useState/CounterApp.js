import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [ state , setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const {
        counter1,
        counter2
    } = state;

    // console.log(counter)

    return (
        <>
            <h3>Counter1 { counter1 }</h3>
            <h3>Counter2 { counter2 }</h3>
            <hr />

            <button onClick={ () => { 
                setState({
                    ...state,
                    counter1: counter1 + 1,
                }) 
            }} className="btn btn-primary">
                +1
            </button>
        </>
    )
}

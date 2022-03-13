import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    // Handle Add
    const handleAdd = () => setCounter( counter + 1 );

    // Handle Substract
    const handleSubstract = () => setCounter( counter - 1 );

    // Handle Reset
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )

}

export default CounterApp;

CounterApp.propTypes =  {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 100
}
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value); // [valor, funcion]
    
    //handleAdd
    const handleAdd = (e) => {
        // setCounter( counter + 1 );
        setCounter( (C) => C + 1 )
    }

    //handleReset
    const handleReset = (e) => {
        // setCounter( counter + 1 );
        setCounter( value );
    }

    //handleSubstract
    const handleSubstract = (e) => {
        // setCounter( counter + 1 );
        setCounter( (C) => C - 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleSubstract } >-1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleAdd } >+1</button>
        </>
    )

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
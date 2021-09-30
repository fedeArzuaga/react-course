// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// Functional Components

const PrimeraApp = ({ greeting, subtitle }) => {
    return (
        <>
            <h1>{ greeting }</h1>
            {/* <pre>{ JSON.stringify(greeting, null, 3) }</pre> */}
            <p>{ subtitle }</p>
        </>
    ); 
}

export default PrimeraApp;

PrimeraApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'I\'m a subtitle'
}
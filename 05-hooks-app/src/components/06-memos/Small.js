import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Me volvi a ejecutar :(');

    return (
        <small>{ value }</small>
    )
})

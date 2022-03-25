import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log(`I'm executing myself again :(`);

    return (
        <div>
            <button
                className='btn btn-primary'    
                onClick={ () => {
                    increment(5)
                }}
            >
                Increment
            </button>
        </div>
    )
})

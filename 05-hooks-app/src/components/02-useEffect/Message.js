import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [ coords, setCoords ] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coords;

    const handleMouseMove = e => (
        setCoords({
            x: e.x,
            y: e.y
        })
    );

    useEffect(() => {
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])
    

    return (
        <>
            <h1>
                You're amazing!
            </h1>
            <p>
                x:{x} y:{y}
            </p>
        </>
    )
}

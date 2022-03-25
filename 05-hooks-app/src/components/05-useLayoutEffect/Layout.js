import React, { useRef, useLayoutEffect, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import "./layout.css";

export const Layout = () => {

    const [boxSize, setBoxSize] = useState({});

    const { counter, setCounter } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef()
    
    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote])


    return (
        <>
            <h1>Layout effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className=""
                    ref={pTag}
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setCounter(counter + 1)
                } }
            >
                Next quote
            </button>
            
        </>
    )
}

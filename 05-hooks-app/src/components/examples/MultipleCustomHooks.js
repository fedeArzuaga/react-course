import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import "./../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

    const { counter, setCounter } = useCounter(Math.ceil(Math.random() * 20));

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    console.log(author, quote);


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading
                        </div>
                    )
                :   (
                        <blockquote className="blockquote text-right">
                            <p className="">
                                { quote }
                            </p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setCounter(Math.ceil(Math.random() * 100))
                } }
            >
                Next quote
            </button>
            
        </>
    )
}

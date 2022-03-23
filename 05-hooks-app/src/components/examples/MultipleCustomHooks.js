import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import "./../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

    console.log(state);

    return (
        <h1>CustomHooks</h1>
    )
}

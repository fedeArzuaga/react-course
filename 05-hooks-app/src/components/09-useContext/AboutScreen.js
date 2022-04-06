import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    // 1. Obtener referencia al context
    const userContext = useContext( UserContext );

    // 2. Extraer set user
    const { user, setUser } = userContext;

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 4) }
            </pre>

            <button
                className="btn btn-danger"
                onClick={ handleClick }
            >
                Log out
            </button>

        </div>
    )
}
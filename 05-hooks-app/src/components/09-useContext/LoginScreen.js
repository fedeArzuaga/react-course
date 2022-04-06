import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // 1. Obtener referencia al context
    const userContext = useContext( UserContext );

    // 2. Extraer set user
    const { setUser } = userContext;

    // 3. New user
    const user = {
        id: 843548,
        name: 'Federico',
        email: 'something@anythingelse.com'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button 
                className= "btn btn-primary"
                onClick={ () => { setUser(user) } }
            >
                Login
            </button>

        </div>
    )
}

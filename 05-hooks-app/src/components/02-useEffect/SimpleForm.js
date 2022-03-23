import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey!');
    }, [])

    useEffect( () => {
        // console.log('form state changed');
    }, [formState])

    useEffect( () => {
        // console.log('Only for email field changed');
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    placeholder="Your name"
                    value={name}
                    name="name"
                    onChange={ handleInputChange }
                    />
            </div>

            <div className="form-group">
                <input 
                    type="email"
                    placeholder="Your email"
                    value={email}
                    name="email"
                    onChange={ handleInputChange }
                    />
            </div>

            { (name === "fede") && <Message /> }

        </>
    )
}

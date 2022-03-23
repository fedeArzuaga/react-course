import React from 'react';
import { useForm } from '../../Hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
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

            <div className="form-group">
                <input 
                    type="password"
                    placeholder="Your password"
                    value={password}
                    name="password"
                    onChange={ handleInputChange }
                    />
            </div>

            <div className="form-group">
                <input 
                    type="submit"
                    value="Guardar"
                />
            </div>

        </form>
    )
}

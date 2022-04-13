import React from 'react';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { ui } = useSelector( state => state );

    const [ values, handleInputChange ] = useForm({
        name: 'Federico',
        email: 'fedemaxio.30@gmail.com',
        password: '15112016karen',
        password2: '15112016karen'
    })

    const { name, email, password, password2 } = values;

    const handleRegister = e => {
        
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch(
                startRegisterWithEmailPasswordName( email, password, name )
            )
        } 

    }

    const isFormValid = () => {


        if ( name.length === 0 ) {
            dispatch(
                setError('Name is required')
            )
            return false;
        } else if ( !validator.isEmail(email) ) {
            dispatch(
                setError('Incorrect format')
            )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch(
                setError('Password should have at least 1 character and must match each other')
            )
            return false;
        }

        
        dispatch(
            removeError()
        );
        return true;

    }

    return (
        <>
            <h3 className="auth__title">Register</h3>   

            <form onSubmit={ handleRegister }>

                {
                    ui.msgError && (
                        <div className="auth__alert-error">
                            { ui.msgError }
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input  
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input  
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    disabled={ ui.loading }
                >
                    Sign Up
                </button>

                <Link className="link" to="/auth/login">
                    Already register?
                </Link>

            </form>
        </>
    )
}
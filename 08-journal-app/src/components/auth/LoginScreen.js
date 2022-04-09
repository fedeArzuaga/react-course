import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        email: 'email@email.com',
        password: '123456'
    });

    const { email, password } = values;

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch( startLoginWithEmailPassword( email, password ) )
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>   

            <form onSubmit={ handleLogin }>

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

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Log in with social network</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>

                <Link className="link" to="/auth/register">
                    Create new account
                </Link>

            </form>
        </>
    )
}

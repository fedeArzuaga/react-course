import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">useContext</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeclassname="active" className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink activeclassname="" className="nav-link" to="/about">
                            About
                        </NavLink>
                        <NavLink activeclassname="" className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

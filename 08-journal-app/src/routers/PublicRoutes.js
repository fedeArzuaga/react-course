import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children }) => {

    const { auth } = useSelector( state => state );

    return !auth.isLoggedIn
        ? children
        : <Navigate to="/" />
        
}

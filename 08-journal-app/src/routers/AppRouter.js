import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState( true );

    useEffect(() => {
      
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {

            if ( user?.uid ) {

                dispatch(
                    login( user.uid, user.displayName )
                );
                
                dispatch(
                    startLoadingNotes( user.uid )
                );

                setChecking( false );
                
            } else {
               
                setChecking( false );
                
            } 

        });

    }, [ checking ])

    if ( checking ) {
        return (
            <h1>Waiting...</h1>
        )
    }
    
    return (
        <Routes>
            
            <Route path="/" element={ 
                <PrivateRoutes>
                    <JournalScreen /> 
                </PrivateRoutes>
            } />
        
            <Route path="/auth/*" element={
                <PublicRoutes>
                    <AuthRouter />
                </PublicRoutes>
            } />

            <Route path="/*" element={ <Navigate replace to="/auth/*" /> } />
            <Route path="/auth" element={ <Navigate replace to="/auth/*" /> } />
            
        </Routes>
    )
}

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <JournalScreen /> } />
            <Route path="/auth/*" element={ <AuthRouter /> } />
            <Route path="/*" element={ <Navigate replace to="/auth/*" /> } />
            <Route path="/auth" element={ <Navigate replace to="/auth/*" /> } />
        </Routes>
    )
}

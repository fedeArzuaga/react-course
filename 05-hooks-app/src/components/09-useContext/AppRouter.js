import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { PageNotFound } from './PageNotFound';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<HomeScreen/>} />
                        <Route exact path="/about" element={<AboutScreen/>} />
                        <Route exact path="/login" element={<LoginScreen/>} />
                        <Route exact path="/404" element={<PageNotFound/>} />
                        <Route path="*" element={ <Navigate to="/404" /> } />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
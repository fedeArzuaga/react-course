import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={ store }>
            <Router>
                <AppRouter />
            </Router>
        </Provider>
    )
}

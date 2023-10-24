import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import './styles/App.scss';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Settings from './pages/Settings';

import store from './store';

const App = () => {
    return (
        <main className="Main" themeStyle="default" themeMode="light">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace={true} />}
                        />
                        <Route path="/home" element={Layout(Home)} />
                        <Route path="/calendar" element={Layout(Home)} />
                        <Route path="/todolist" element={Layout(Home)} />
                        <Route path="/categories" element={Layout(Home)} />
                        <Route path="/notes" element={Layout(Home)} />
                        <Route path="/settings" element={Layout(Settings)} />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </Router>
            </Provider>
        </main>
    );
};

export default App;

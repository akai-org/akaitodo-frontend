import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import './styles/App.scss';

import Layout from './layout/Layout';
import Home from './pages/home';
import Settings from './pages/settings';
import Login from './pages/login';
import Modal from './components/widgets/ModalWidget'

import store from './store';
import { CustomModuleContext, customModuleInitialContext } from './contexts/CustomModuleContext';

const App = () => {
    const [customModule, setCustomModule] = useState(customModuleInitialContext);

    return (
        <main className="Main" themeStyle="default" themeMode="light">
            <Provider store={store}>
                <CustomModuleContext.Provider value={{ customModule, setCustomModule }}>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace={true} />}
                        />
                        <Route
                            path="/home"
                            element={Layout({
                                Component: Home,
                                props: {},
                            })}
                        />
                        <Route
                            path="/calendar"
                            element={Layout({
                                Component: Home,
                                props: {},
                            })}
                        />
                        <Route
                            path="/todolist"
                            element={Layout({
                                Component: Home,
                                props: {},
                            })}
                        />
                        <Route
                            path="/categories"
                            element={Layout({
                                Component: Home,
                                props: {},
                            })}
                        />
                        <Route
                            path="/notes"
                            element={Layout({
                                Component: Home,
                                props: {},
                            })}
                        />
                        <Route
                            path="/settings"
                            element={Layout({
                                Component: Settings,
                                props: {},
                            })}
                        />
                        <Route path="*" element={<div>Not found</div>} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
                </CustomModuleContext.Provider>
            </Provider>
        </main>
    );
};

export default App;

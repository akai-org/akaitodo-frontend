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
import Home from './pages/home';
import ToDoList from './pages/todolist/ToDoList';
import Settings from './pages/settings';
import Login from './pages/login';
import Modal from './components/widgets/ModalWidget'

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
                                Component: ToDoList,
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
            </Provider>
        </main>
    );
};

export default App;

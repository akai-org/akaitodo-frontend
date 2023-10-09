import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App = () => {
    return (
        <main className="Main" themeStyle="default" themeMode="light">
            <Router>
                <Navbar />
                <div className="App_container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/calendar" element={<Home />} />
                        <Route path="/todolist" element={<Home />} />
                        <Route path="/categories" element={<Home />} />
                        <Route path="/notes" element={<Home />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </Router>
        </main>
    );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';

import Navbar from './layout/Navbar/Navbar';
import ScrollableContainer from './layout/ScrollableContainer/ScrollableContainer';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App = () => {
    return (
        <main className="Main" themeStyle="default" themeMode="light">
            {/* login logic here */}
            <Router>
                <Navbar />
                <ScrollableContainer>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/calendar" element={<Home />} />
                        <Route path="/todolist" element={<Home />} />
                        <Route path="/categories" element={<Home />} />
                        <Route path="/notes" element={<Home />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </ScrollableContainer>
            </Router>
        </main>
    );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/App.scss";

function App() {
  return (
    <div className="main" themestyle="default" thememode="light">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/calendar" element={<Home/>}/>
          <Route path="/todolist" element={<Home/>}/>
          <Route path="/categories" element={<Home/>}/>
          <Route path="/notes" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

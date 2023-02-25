import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./styles/App.scss";

function App() {
  return (
    <main className="main" themestyle="default" thememode="light">
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
    </main>
  );
}

export default App;
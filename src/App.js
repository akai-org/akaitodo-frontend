import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

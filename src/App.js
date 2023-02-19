import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import HomeMiddle from "./components/HomeMiddle";
import HomeRight from "./components/HomeRight";


function App() {
  return (
    <div className="home">
      <Router>
        <NavBar className="left"></NavBar>
        <HomeMiddle className="middle"></HomeMiddle>
        <HomeRight className="right"></HomeRight>

        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

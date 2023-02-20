import React from "react";
import HomeMiddle from "./HomeMiddle.js";
import HomeRight from "./HomeRight.js";
import "../styles/App.css";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <HomeMiddle className="middle"></HomeMiddle>
            <HomeRight className="right"></HomeRight>
        </div>
    )
}

export default Home;


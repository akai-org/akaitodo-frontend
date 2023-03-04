import React from "react";
import HomeMiddle from "../components/HomeMiddle";
import HomeRight from "../components/HomeRight";
import "../styles/App.scss";
import "../styles/Home.scss";

function Home() {
    return (
        <div className="home">
            <HomeMiddle className="middle"></HomeMiddle>
            <HomeRight className="right">r</HomeRight>
        </div>
    )
}

export default Home;


import React from "react";
import { Link } from "react-router-dom";
//import "../styles/App.scss";
import "../styles/NavBar.scss";

function NavBarItem(props) {
    return(
        <li className={props.NameLi}>
            <Link to={props.link} className={props.NameLink} onClick={closeMobileMenu}>
                <div className={props.name-icon}><i className={props.name-icon}></i></div>
                <div className={props.name-tag}>Home</div>
            </Link>
        </li>
    );
}

export default NavBarItem;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.scss";
import "../styles/NavBar.scss";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="upper-container">
          <div className="logo-container">
            <Link to="/" className="logo-image-link">
            <div className="logo-image"> <i className="ri-checkbox-blank-circle-line"></i> </div>
            </Link>
            <Link to="/">
            <div className="logo-app-name">DoDo</div>
            </Link>
          </div>

          <div className="menu-icon" onClick={handleclick}>
            <i className={click ? 'ri-menu-fill' : 'ri-close-fill'}></i>
          </div>
        </div>

        <div className="menu-container">
          <ul className={click ? 'menu-list active' : 'menu-list'}>
            <li className="menu-item">
              <Link to="/" className="menu-link" onClick={closeMobileMenu}>
                <div className="menu-link-icon"><i className="ri-home-line"></i></div>
                <div className="menu-link-tag">Home</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/calendar" className="menu-link" onClick={closeMobileMenu}>
              <div className="menu-link-icon"><i className="ri-calendar-line"></i></div>
              <div className="menu-link-tag">Calendar</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/todolist" className="menu-link" onClick={closeMobileMenu}>
              <div className="menu-link-icon"><i className="ri-file-list-2-line"></i></div>
              <div className="menu-link-tag">Todo list</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/categories" className="menu-link" onClick={closeMobileMenu}>
              <div className="menu-link-icon"><i className="ri-bar-chart-horizontal-line"></i></div>
              <div className="menu-link-tag">Categories</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/notes" className="menu-link" onClick={closeMobileMenu}>
              <div className="menu-link-icon"><i className="ri-booklet-line"></i></div>
              <div className="menu-link-tag">Notes</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link" onClick={closeMobileMenu}>
              <div className="menu-link-icon"><i className="ri-settings-4-line"></i></div>
              <div className="menu-link-tag">Settings</div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="user-container">
          <div className="user-tile">
            <div className="user-avatar"></div>
            <div className="user-name"></div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;

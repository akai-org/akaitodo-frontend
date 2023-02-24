import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.scss";
import "../styles/NavBar.scss";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => {
    if (window.innerWidth <= 900) setClick(true);
  };

  const mobileMenu = () => {
    if (window.innerWidth <= 1024) {
      setClick(true);
    } else {
      setClick(false);
    }
  };

  window.addEventListener("resize", mobileMenu);

  useEffect(() => {
    mobileMenu();
  }, []);

  return (
    <nav className="navbar">
      <div className={click ? "navbar-container hide" : "navbar-container"}>
        <div className={click ? "upper-container hide" : "upper-container"}>
          <div className={click ? "logo-container hide" : "logo-container"}>
            <Link
              to="/"
              className={click ? "logo-image-link hide" : "logo-image-link"}
            >
              <div className={click ? "logo-image hide" : "logo-image"}>
                {" "}
                <i className="ri-checkbox-blank-circle-line"></i>{" "}
              </div>
            </Link>
            <Link to="/">
              <div className={click ? "logo-app-name hide" : "logo-app-name"}>
                DoDo
              </div>
            </Link>
          </div>

          <div
            className={click ? "menu-icon hide" : "menu-icon"}
            onClick={handleclick}
          >
            <i className={click ? "ri-menu-fill" : "ri-close-fill"}></i>
          </div>
        </div>

        <div className={click ? "menu-container hide" : "menu-container"}>
          <ul className={click ? "menu-list hide" : "menu-list"}>
            <li className={click ? "menu-item hide" : "menu-item"}>
              <Link
                to="/"
                className={click ? "menu-link hide" : "menu-link"}
                onClick={closeMobileMenu}
              >
                <div
                  className={click ? "menu-link-icon hide" : "menu-link-icon"}
                >
                  <i className="ri-home-line"></i>
                </div>
                <div className={click ? "menu-link-tag hide" : "menu-link-tag"}>
                  Home
                </div>
              </Link>
            </li>
            <li className={click ? "menu-item hide" : "menu-item"}>
              <Link
                to="/calendar"
                className={click ? "menu-link hide" : "menu-link"}
                onClick={closeMobileMenu}
              >
                <div
                  className={click ? "menu-link-icon hide" : "menu-link-icon"}
                >
                  <i className="ri-calendar-line"></i>
                </div>
                <div className={click ? "menu-link-tag hide" : "menu-link-tag"}>
                  Calendar
                </div>
              </Link>
            </li>
            <li className={click ? "menu-item hide" : "menu-item"}>
              <Link
                to="/todolist"
                className={click ? "menu-link hide" : "menu-link"}
                onClick={closeMobileMenu}
              >
                <div
                  className={click ? "menu-link-icon hide" : "menu-link-icon"}
                >
                  <i className="ri-file-list-2-line"></i>
                </div>
                <div className={click ? "menu-link-tag hide" : "menu-link-tag"}>
                  Todo list
                </div>
              </Link>
            </li>
            <li className={click ? "menu-item hide" : "menu-item"}>
              <Link
                to="/categories"
                className={click ? "menu-link hide" : "menu-link"}
                onClick={closeMobileMenu}
              >
                <div
                  className={click ? "menu-link-icon hide" : "menu-link-icon"}
                >
                  <i className="ri-bar-chart-horizontal-line"></i>
                </div>
                <div className={click ? "menu-link-tag hide" : "menu-link-tag"}>
                  Categories
                </div>
              </Link>
            </li>
            <li className={click ? "menu-item hide" : "menu-item"}>
              <Link
                to="/notes"
                className={click ? "menu-link hide" : "menu-link"}
                onClick={closeMobileMenu}
              >
                <div
                  className={click ? "menu-link-icon hide" : "menu-link-icon"}
                >
                  <i className="ri-booklet-line"></i>
                </div>
                <div className={click ? "menu-link-tag hide" : "menu-link-tag"}>
                  Notes
                </div>
              </Link>
            </li>
            <li className={click ? "menu-item hide" : "menu-item"}>
              <Link
                to="/"
                className={click ? "menu-link hide" : "menu-link"}
                onClick={closeMobileMenu}
              >
                <div
                  className={click ? "menu-link-icon hide" : "menu-link-icon"}
                >
                  <i className="ri-settings-4-line"></i>
                </div>
                <div className={click ? "menu-link-tag hide" : "menu-link-tag"}>
                  Settings
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={click ? "user-container hide" : "user-container"}>
          <div className="user-logo">AV</div>
          <div
            className={click ? "logout-background hide" : "logout-background"}
          ></div>
          <div
            className={
              click
                ? "logout-background-snippet hide"
                : "logout-background-snippet"
            }
          ></div>
          <div
            className={
              click ? "user-info-container hide" : "user-info-container"
            }
          >
            <div className="user-name">Username</div>
            <div className="user-logout">Logout</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

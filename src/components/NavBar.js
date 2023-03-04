import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBarData } from "./NavBarItems";
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
    <>
      <div className="navbar-top">
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
      </div>

      <nav className={click ? "navbar-side hide" : "navbar-side"}>
        <div className={click ? "menu-container hide" : "menu-container"}>
          <ul className={click ? "menu-list hide" : "menu-list"}>
            {NavBarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={click ? "menu-item hide" : "menu-item"}
                >
                  <Link
                    to={item.link}
                    className={click ? "menu-link hide" : "menu-link"}
                    onClick={closeMobileMenu}
                  >
                    <div
                      className={
                        click ? "menu-link-icon hide" : "menu-link-icon"
                      }
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div
                      className={click ? "menu-link-tag hide" : "menu-link-tag"}
                    >
                      {item.name}
                    </div>
                  </Link>
                </li>
              );
            })}
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
      </nav>
    </>
  );
}

export default NavBar;

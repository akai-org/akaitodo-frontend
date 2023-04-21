import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBarData } from "./NavBarItems";
import "../styles/App.scss";
import "../styles/NavBar.scss";

function NavBar() {
  // 0 - without menu (class 'hide'), 1 - mobile menu (class 'mobile'), 2 - short menu (class 'short'), 3 - full menu (without additional class)
  const [click, setClick] = useState();
  const [resizeWidth, setResizeWidth] = useState(window.innerWidth);
  let switchIcon = "ri-close-fill";

  const handleClick = () => {
    if (click === 0) setClick(1);
    else if (click === 1) setClick(0);
    else if (click === 3) setClick(2);
    else if (click === 2) setClick(3);
  };

  const closeMenu = () => {
    if (window.innerWidth < 768) setClick(0);
    else if (window.innerWidth < 1024) setClick(2);
  };

  const menuState = () => {
    if (window.innerWidth >= 1024) {
      setClick(3);
    } else if (window.innerWidth >= 768) {
      setClick(2);
    } else {
      setClick(0);
    }
  };

  //Navbar modes
  const switchClassNames = (clsname) => {
    switch (click) {
      case 0:
        switchIcon = "ri-menu-fill";
        return `${clsname} hide`;
      case 1:
        switchIcon = "ri-close-fill";
        return `${clsname} mobile`;
      case 2:
        switchIcon = "ri-menu-fill";
        return `${clsname} short`;
      case 3:
        switchIcon = "ri-close-fill";
        return `${clsname}`;
      default:
        menuState();
    }
  };

  window.addEventListener("resize", () => {
    // Prevent height changes effect closing menu
    if (window.innerWidth !== resizeWidth) {
      setResizeWidth(window.innerWidth);
      menuState();
    }
  });

  useEffect(() => {
    menuState();
  }, []);

  return (
    <>
      <div className={switchClassNames("navbar-top")}>
        <div className={switchClassNames("upper-container")}>
          <div className={switchClassNames("logo-container")}>
            <Link to="/" className={switchClassNames("logo-image-link")}>
              <div className={switchClassNames("logo-image")}>
                <i className="ri-checkbox-blank-circle-line"></i>
              </div>
            </Link>
            <Link to="/">
              <div className={switchClassNames("logo-app-name")}>DoDo</div>
            </Link>
          </div>

          <div className={switchClassNames("menu-icon")} onClick={handleClick}>
            <i className={switchIcon}></i>
          </div>
        </div>
      </div>

      <nav className={switchClassNames("navbar-side")}>
        <div className={switchClassNames("menu-container")}>
          <ul className={switchClassNames("menu-list")}>
            {NavBarData.map((item, index) => {
              return (
                <li key={index} className={switchClassNames("menu-item")}>
                  <Link
                    to={item.link}
                    className={switchClassNames("menu-link")}
                    onClick={closeMenu}
                  >
                    <div className={switchClassNames("menu-link-icon")}>
                      <i className={item.icon}></i>
                    </div>
                    <div className={switchClassNames("menu-link-tag")}>
                      {item.name}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={switchClassNames("user-container")}>
          <div className={switchClassNames("user-info-container")}>
            <div className="user-logo">AV</div>
            <div className={switchClassNames("user-text-container")}>
              <div className={switchClassNames("user-name")}>Username</div>
              <div className={switchClassNames("user-logout")}>Logout</div>
            </div>
          </div>
          <div className={switchClassNames("logout-background")}></div>
          <div className={switchClassNames("logout-background-snippet")}></div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

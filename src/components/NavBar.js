import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBarData } from "./NavBarItems";
import "../styles/App.scss";
import "../styles/NavBar.scss";

function NavBar() {
  // 1 - without menu (class 'hide'), 2 - short menu (class 'short'), 3 - full menu (without additional class)
  const [click, setClick] = useState(3);
  let switchIcon = "ri-close-fill";

  const handleClick = () => {
    if (click === 3 && window.innerWidth <= 768) setClick(1);
    else if (click === 3 && window.innerWidth > 768) setClick(2);
    else setClick(3);
  };

  const closeMobile = () => {
    if (window.innerWidth < 768) setClick(1);
    else if (window.innerWidth < 1024) setClick(2);
  };

  const mobileMenu = () => {
    if (window.innerWidth >= 1024) {
      setClick(3);
    } else if (window.innerWidth >= 768) {
      setClick(2);
    } else {
      setClick(1);
    }
  };

  //Navbar modes
  const switchClassNames = (clsname) => {
    switch (click) {
      case 1:
        switchIcon = "ri-menu-fill";
        return `${clsname} hide`;
      case 2:
        switchIcon = "ri-menu-fill";
        return `${clsname} short`;
      case 3:
        switchIcon = "ri-close-fill";
        return `${clsname}`;
      default:
        console.log("Fail switching class");
        return `${clsname}`;
    }
  };

  window.addEventListener("resize", mobileMenu);

  useEffect(() => {
    mobileMenu();
  }, []);

  return (
    <>
      <div className="navbar-top">
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
                    onClick={closeMobile}
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
          <div className="user-logo">AV</div>
          <div className={switchClassNames("logout-background")}></div>
          <div className={switchClassNames("logout-background-snippet")}></div>
          <div className={switchClassNames("user-info-container")}>
            <div className="user-name">Username</div>
            <div className="user-logout">Logout</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

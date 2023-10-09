import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { NavbarItems } from './NavbarItems';

import '../../styles/App.scss';
import styles from '../../styles/components/navbar/Navbar.module.scss';

const Navbar = () => {
    // 0 - without menu (class 'hide'), 1 - mobile menu (class 'mobile'), 2 - short menu (class 'short'), 3 - full menu (without additional class)
    const [click, setClick] = useState();
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth);
    let switchIcon = 'ri-close-fill';

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
                switchIcon = 'ri-menu-fill';
                return `${clsname} ${styles.hide}`;
            case 1:
                switchIcon = 'ri-close-fill';
                return `${clsname} ${styles.mobile}`;
            case 2:
                switchIcon = 'ri-menu-fill';
                return `${clsname} ${styles.short}`;
            case 3:
                switchIcon = 'ri-close-fill';
                return `${clsname}`;
            default:
                menuState();
        }
    };

    window.addEventListener('resize', () => {
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
            <div className={switchClassNames(styles.top)}>
                <div className={switchClassNames(styles.upperContainer)}>
                    <div className={switchClassNames(styles.logoContainer)}>
                        <Link
                            to="/"
                            className={switchClassNames(styles.logoImageLink)}
                        >
                            <div className={switchClassNames(styles.logoImage)}>
                                <i className="ri-checkbox-blank-circle-line"></i>
                            </div>
                        </Link>
                        <Link to="/">
                            <div
                                className={switchClassNames(styles.logoAppName)}
                            >
                                DoDo
                            </div>
                        </Link>
                    </div>

                    <div
                        className={switchClassNames(styles.menuIcon)}
                        onClick={handleClick}
                    >
                        <i className={switchIcon}></i>
                    </div>
                </div>
            </div>

            <nav className={switchClassNames(styles.side)}>
                <div className={switchClassNames(styles.menuContainer)}>
                    <ul className={switchClassNames(styles.menuList)}>
                        {NavbarItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={switchClassNames(
                                        styles.menuItem,
                                    )}
                                >
                                    <Link
                                        to={item.link}
                                        className={switchClassNames(
                                            styles.menuLink,
                                        )}
                                        onClick={closeMenu}
                                    >
                                        <div
                                            className={switchClassNames(
                                                styles.menuLinkIcon,
                                            )}
                                        >
                                            <i className={item.icon}></i>
                                        </div>
                                        <div
                                            className={switchClassNames(
                                                styles.menuLinkTag,
                                            )}
                                        >
                                            {item.name}
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className={switchClassNames(styles.userContainer)}>
                    <div className={switchClassNames(styles.userInfoContainer)}>
                        <div className={styles.userLogo}>AV</div>
                        <div
                            className={switchClassNames(
                                styles.userTextContainer,
                            )}
                        >
                            <div className={switchClassNames(styles.userName)}>
                                Username
                            </div>
                            <div
                                className={switchClassNames(styles.userLogout)}
                            >
                                Logout
                            </div>
                        </div>
                    </div>
                    <div
                        className={switchClassNames(styles.logoutBackground)}
                    ></div>
                    <div
                        className={switchClassNames(
                            styles.logoutBackgroundSnippet,
                        )}
                    ></div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

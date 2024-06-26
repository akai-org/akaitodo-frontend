import React, { useContext, forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from '#src/styles/layout/Navbar/Navbar.module.scss';

import { NavbarModuleContext } from '../../contexts/NavbarModuleContext';

const NavbarModule = ({ children }) => {
    const { navbarModule } = useContext(NavbarModuleContext);

    useEffect(() => {
    }, [navbarModule]);

    return navbarModule.reference
        ? createPortal((<>{children}</>), navbarModule.reference)
        : (<></>);
};

export const NavbarModuleParent = forwardRef(({ children, modeClass }, ref) => (
    <div className={`${styles.customModuleContainer} ${modeClass}`} ref={ref}>
        {children}
    </div>
));

export default NavbarModule;

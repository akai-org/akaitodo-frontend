import React, { useContext, forwardRef } from 'react';
import { createPortal } from 'react-dom';

import styles from '#src/styles/layout/navbar/Navbar.module.scss';

import { NavbarModuleContext } from '../../contexts/NavbarModuleContext';

const NavbarModule = ({ children }) => {
    const { navbarModule } = useContext(NavbarModuleContext);

    return createPortal((
        <div>{children}</div>
    ), navbarModule.reference);
};

export const NavbarModuleComponent = forwardRef(({ children, modeClass }, ref) => (
    <div className={`${styles.customModuleContainer} ${modeClass}`} ref={ref}>
        {children}
    </div>
));

export default NavbarModule;

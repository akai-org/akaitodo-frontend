import React, { useContext, forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from '#src/styles/layout/navbar/Navbar.module.scss';

import { NavbarModuleContext } from '../../contexts/NavbarModuleContext';

const NavbarModule = ({ children }) => {
    const { navbarModule } = useContext(NavbarModuleContext);

    useEffect(() => {
    }, [navbarModule]);

    return navbarModule.reference
        ? createPortal((<div>{children}</div>), navbarModule.reference)
        : (<></>);
};

export const NavbarModuleParent = forwardRef(({ children, modeClass }, ref) => (
    <div className={`${styles.customModuleContainer} ${modeClass}`} ref={ref}>
        {children}
    </div>
));

export default NavbarModule;

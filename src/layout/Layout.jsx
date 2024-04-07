import React from 'react';

import Navbar from './Navbar';
import ScrollableContainer from './ScrollableContainer';

const Layout = ({ Component, props }) => (
    <>
        <Navbar />
        <ScrollableContainer>
            <Component {...props} />
        </ScrollableContainer>
    </>
);

export default Layout;

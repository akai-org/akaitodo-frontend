import React from 'react';
import Navbar from './Navbar';
import ScrollableContainer from './Scrollablecontainer';

const Layout = ({ Component, props }) => (
    <>
        <Navbar />
        <ScrollableContainer>
            <Component {...props} />
        </ScrollableContainer>
    </>
);

export default Layout;

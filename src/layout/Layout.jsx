import React from 'react';
import Navbar from './Navbar';
import ScrollableContainer from './Scrollablecontainer';

const Layout = (Component) => (
    <>
        <Navbar />
        <ScrollableContainer />
        {Component}
    </>
);

export default Layout;
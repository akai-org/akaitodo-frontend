import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../store/slices/Auth';
import LocalStorage from '../classes/LocalStorage';
// import Login component

export const Guard = (component) => {
    return true ? component : AuthError;
};

const AuthError = () => {
    return (
        // render login component
        <>
            <h1>You failed...</h1>
        </>
    );
};

export default Guard;

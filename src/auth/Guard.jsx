import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelector } from '../store/slices/Auth';
import { Navigate, useNavigate } from 'react-router-dom';

const Guard = ({ Component }) => (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(authSelector);

    useEffect(() => {
        if (!auth.isAuthenticated)
            console.log('test');
            dispatch(authActions.verifyToken(auth));
    }, []);

    useEffect(() => {
        console.log(auth.isAuthenticated);
    }, [auth.isAuthenticated]);

    if (auth.isAuthenticated) {
        return <Component {...props} />;
    }

    return <Navigate to='/login'/>
};

export default Guard;

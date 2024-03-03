import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { authActions, authSelector } from '../store/slices/Auth/Auth.slice';
import LoadingScreen from '../components/widgets/LoadingScreen';

const Guard = ({ Component, isLogin = false }) => (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);
    const location = useLocation();
    
    useEffect(() => {
        if (!auth.isAuthenticated)
            dispatch(authActions.verifyToken());
    }, [auth.isAuthenticated]);

    useEffect(() => {}, [auth.isLoading]);

    if (auth.isLoading) {
        return <LoadingScreen />;
    }

    if (isLogin) {
        if (auth.isAuthenticated)
            return <Navigate to='/' state={{ from: location }} replace/>
            
        return <Component {...props} />;
    } else {
        if (auth.isAuthenticated)
            return <Component {...props} />;
    }

    return <Navigate to='/login' state={{ from: location }} replace/>
};

export default Guard;

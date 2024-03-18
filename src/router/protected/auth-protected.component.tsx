import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Routes } from '../routes';
import { getToken } from '../../core/helpers/get-token';
import { useEffect } from 'react';
import { IAuthProtectedRouteProps } from './auth-protected';
import { setUser } from '../../store/store.reducer';

const AuthProtectedComponent = ({children, layout = 'public'}: IAuthProtectedRouteProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getToken();
        if (token) {
            dispatch(setUser(token));
        }
    }, [dispatch]);
    
    switch (layout) {
        case 'auth':
            return getToken() ? <Navigate to={Routes.home} replace /> : children;
        case 'public':
            return getToken() ? children : <Navigate to={Routes.login} replace />;
        default:
            return children;
    }
};

export default AuthProtectedComponent;

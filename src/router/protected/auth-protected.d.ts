import {ReactElement} from 'react';

export interface IAuthProtectedRouteProps {
    dep?: any;
    children: ReactElement;
    layout: 'auth' | 'public'
}

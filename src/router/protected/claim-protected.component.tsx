import {Navigate} from 'react-router-dom';
import {Routes} from '../routes';
import {IAuthProtectedRouteProps} from './auth-protected';
import {useStore} from '../../store/store.config';
const ClaimProtectedComponent = ({children}: IAuthProtectedRouteProps) => {
    const user = useStore('user');
    if (!user) {
        return <Navigate to={Routes.auth} replace />;
    }

    return children;
};

export default ClaimProtectedComponent;

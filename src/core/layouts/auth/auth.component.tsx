import {Outlet} from 'react-router-dom';
import {useAuthStyles} from './auth.style';

const AuthComponent = () => {
    const {auth} = useAuthStyles();

    return (
            <div className={auth}>
               <Outlet/>
            </div>
    );
};

export default AuthComponent;

import {useMutation} from 'react-query';
import {login} from './login.service';
import {store} from 'store/store.config';
import {setUser} from 'store/store.reducer';
import {setToken} from 'core/helpers/get-token';
import {useNavigate} from 'react-router-dom';
import {Routes} from 'router/routes';
import {ILoginFormValues} from '../login';

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: ILoginFormValues) => {
            return login(credentials);
        },
        onSuccess: (response) => {
            setToken('token');
            store.dispatch(setUser(response.token));
            navigate(Routes.home);
        },
    });
};

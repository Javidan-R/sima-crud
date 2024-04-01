import { clearToken } from 'core/helpers/get-token';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
import { store } from 'store/store.config';
import { clearUser } from 'store/store.reducer';

export default function useLogoutMutation() {
  const navigate = useNavigate();

  const logoutMutation = useMutation<void, Error>(async () => {
    clearToken();
    store.dispatch(clearUser());
    navigate(Routes.login);
  });

  return logoutMutation;
}

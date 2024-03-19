import { clearToken } from "core/helpers/get-token";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Routes } from "router/routes";
import { store } from "store/store.config";
import { clearUser } from "store/store.reducer";

const navigate = useNavigate();

  const logoutMutation = useMutation((): any => {
    clearToken();
    store.dispatch(clearUser());
    navigate(`${Routes.login}`);
  });
  export  default logoutMutation;

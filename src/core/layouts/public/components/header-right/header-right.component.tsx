import avatar from "assets/images/statics/juan.jpg";
import { LogoutIcon } from "assets/images/icons/logout";
import { useHeaderRightStyles } from "./header-right.style";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "router/routes";
import { clearToken } from "core/helpers/get-token";
import { clearUser } from "store/store.reducer";
import { store } from "store/store.config";

const HeaderRightComponent = () => {
  const classes = useHeaderRightStyles();
  const navigate = useNavigate();

  const logoutMutation = useMutation((): any => {
    clearToken();
    store.dispatch(clearUser());
    navigate(`${Routes.login}`);
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <ul className={classes.items}>
      <Link to={Routes.account}>
        <li className={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </li>
      </Link>

      <li className={classes.logout} onClick={handleLogout}>
        <LogoutIcon />
      </li>
    </ul>
  );
};

export default HeaderRightComponent;

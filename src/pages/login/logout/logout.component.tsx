import { LogoutIcon } from 'assets/images/icons/logout';
import logoutMutation from './actions/logout.mutation';
import { useLogOutStyles } from './logout.style';

const LogoutComponent = () => {
  const classes = useLogOutStyles();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
      <li className={classes.logout} onClick={handleLogout}>
        <LogoutIcon />
      </li>
  );
};

export default LogoutComponent;

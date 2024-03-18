import {useAccountStyles} from './account.style';
const AccountComponent = () => {
    const classes = useAccountStyles();
  return (
    <div className={classes.testDiv}>
        <h2 className={classes.testText}>
            Account
        </h2>
    </div>
  );
};

export default AccountComponent;
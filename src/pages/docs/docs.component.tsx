import { successToast, warningToast, errorToast, infoToast } from '../../core/shared/toast/toast';
import { useButtonStyles } from './docs.style';

const DocsComponent = () => {
    const classes = useButtonStyles();

    const handleSuccess = () => {
    successToast('This is a success message!');
  };

  const handleWarning = () => {
    warningToast('This is a warning message!');
  };

  const handleError = () => {
    errorToast('This is an error message!');
  };

  const handleInfo = () => {
    infoToast('This is an info message!');
  };

  return (
    <div>
      <button className={`${classes.button} ${classes.success}`} onClick={handleSuccess}>
        Success Button
      </button>
      <button className={`${classes.button} ${classes.warning}`} onClick={handleWarning}>
        Warning Button
      </button>
      <button className={`${classes.button} ${classes.danger}`} onClick={handleError}>
        Error Button
      </button>
      <button className={`${classes.button} ${classes.info}`} onClick={handleInfo}>
        Info Button
      </button>
    </div>
  );
};

export default DocsComponent;

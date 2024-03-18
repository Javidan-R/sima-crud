 import {useContactStyles} from './contact.style';
const ContactComponent = () => {
    const classes = useContactStyles();
  return (
    <div className={classes.testDiv}>
        <p className={classes.testText}>Contact</p>
    </div>
  );
};

export default ContactComponent;
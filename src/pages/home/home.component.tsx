import { useHomeStyles } from "./home.style";

const HomeComponent = () => {
    const classes = useHomeStyles();
    return (
        <div className={classes.testDiv}>
            <h2 className={classes.testText}>Home</h2>
        </div>
    );
};

export default HomeComponent;

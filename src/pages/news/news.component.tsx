import { useNewsStyles } from './news.style';
const NewsComponent = () => {
    const classes = useNewsStyles();
  return (
    <div className={classes.testDiv}>
       <p className={classes.testText}>NewsComponent</p> 
        </div>
  );
};
export default NewsComponent;

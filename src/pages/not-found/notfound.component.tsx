import notFound from 'assets/images/statics/notfound.svg';
import {Link} from 'react-router-dom';
import {Routes} from 'router/routes';
import {useNotFoundStyles} from './notfound.style';

const NotfoundComponent = () => {
    const {page, panel, title, subtitle, invalidField, button, buttonField} = useNotFoundStyles();

    return (
        <>
            <div
                className={page}
                style={{
                    backgroundImage: `url("${notFound}")`,
                }}
            >
                <div className={panel}>
                    <div className={invalidField}>
                        <h1 className={title}>404</h1>
                        <p className={subtitle}>Ooops!</p>
                        <p className='error-content__error-text'>
                            The page you requested was not found!
                        </p>
                        <div  className={buttonField}>
                        <Link to={Routes.default} className={`${button}`}>
                            Go Back
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotfoundComponent;

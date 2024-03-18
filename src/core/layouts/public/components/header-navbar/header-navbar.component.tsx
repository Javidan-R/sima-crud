import HeaderRightComponent from '../header-right/header-right.component';
import simaLogo from 'assets/images/statics/sima-negative.svg';
import {useHeaderNavbarStyles} from './header-navbar.style';
import {NavLink} from 'react-router-dom';
import {Routes} from 'router/routes';

const HeaderNavbarComponent = () => {
    const classes = useHeaderNavbarStyles();

    return (
        <div className={`${classes.navbar} py-8 pl-30 pr-20`}>
            <div className='row align-center'>
                <div className='col-8'>
                    <div className={classes.left}>
                        <NavLink to={Routes.default}>
                            <img src={simaLogo} alt='logo'/>
                        </NavLink>
                    </div>
                </div>
                <div className='col-4'>
                    <HeaderRightComponent/>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbarComponent;

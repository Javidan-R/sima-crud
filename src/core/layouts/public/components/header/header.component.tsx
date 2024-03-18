import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import './header.style';
import HeaderSubComponent from '../header-sub/header-sub.component';
import {useHeaderStyles} from './header.style';

const HeaderComponent = () => {
    const classes = useHeaderStyles();
    return (
        <div className={classes.header}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 p-0'>
                        <HeaderNavbarComponent/>
                    </div>
                    <div className='col-12 p-0'>
                        <HeaderSubComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HeaderComponent;

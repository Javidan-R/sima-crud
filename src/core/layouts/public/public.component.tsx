import HeaderComponent from './components/header/header.component';
import LeftMenuComponent from './components/left-menu/left-menu.component';
import {Outlet} from 'react-router-dom';
import FooterComponent from './components/footer/footer.component';
import {usePublicLayoutStyles} from './public.style';
import classNames from 'classnames';
import {useStore} from 'store/store.config';

const PublicComponent = () => {
    const classes = usePublicLayoutStyles();
    const leftMenu = useStore('leftMenu');

    const publicClasses = classNames({
        [classes.content]: true,
        [classes.active]: !leftMenu,
    });

    return (
        <div className={classes.public}>
            <HeaderComponent/>
            <LeftMenuComponent isOpen={leftMenu}/>
            <div className={publicClasses}>
                <Outlet/>
            </div>
            <FooterComponent isOpen={leftMenu}/>
        </div>
    );
};


export default PublicComponent;


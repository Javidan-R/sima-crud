import {memo} from 'react';
import LeftMenuItemComponent from '../left-menu-item/left-menu-item.component';
import {generateGuid} from 'core/helpers/generate-guid';
import {BlogIcon, ContactIcon, DocsIcon, HomeIcon, NewsIcon} from 'assets/images/icons/left-menu';
import {Routes} from 'router/routes';
import {useLeftMenuStyles} from './left-menu.style';
import classNames from 'classnames';
import useLocalization from 'assets/lang';
import { MenuItem } from '../../public';

const LeftMenuComponent = memo(({isOpen}: { isOpen: boolean }) => {
    const classes = useLeftMenuStyles();

    const translate = useLocalization();

    const items: MenuItem[]= [
        {
            id: 1,
            name: translate('home_title'),
            link: Routes.home,
            icon: <HomeIcon/>,
            submenu: [
                {
                    id: 1,
                    link: Routes.home,
                    name: 'test',
                },
                {
                    id: 2,
                    link: Routes.home,
                    name: 'test2'
                },
            ]
        },
        {
            id: 2,
            name: translate('user_title'),
            link: Routes.users,
            icon: <BlogIcon/>,
        }, 
        {
            id: 3,
            name: translate('form_title'),
            link: Routes.form,
            icon: <HomeIcon/>,
        },
        {
            id: 4,
            name: translate('news_title'),
            link: Routes.news,
            icon: <NewsIcon/>,
        },
        {
            id: 5,
            name: translate('blog_title'),
            link: Routes.blog,
            icon: <BlogIcon/>,
        },
        {
            id: 6,
            name: translate('docs_title'),
            link: Routes.docs,
            icon: <DocsIcon/>,
        },
        {
            id: 7,
            name: translate('contact_title'),
            link: Routes.contact,
            icon: <ContactIcon/>,
        }

    ];

    const leftMenuClasses = classNames({
        [classes.leftMenu]: true,
        [classes.hide]: !isOpen,
    });

    return (
        <div className={leftMenuClasses}>
            <ul>
                {
                    items.map((i: any) => (
                        <LeftMenuItemComponent
                            key={generateGuid()}
                            name={i.name}
                            link={i.link}
                            icon={i.icon}
                            submenu={i.submenu}
                        />
                    ))
                }
            </ul>
        </div>
    );
});


export default LeftMenuComponent;

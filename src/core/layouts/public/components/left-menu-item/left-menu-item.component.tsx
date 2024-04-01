import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { generateGuid } from 'core/helpers/generate-guid';
import { ArrowDown, ArrowRight } from 'assets/images/icons/arrows';
import { ILeftMenuItemProps } from '../../public';
import { useLeftMenuItemStyles } from './left-menu-item.style';

const LeftMenuItemComponent: React.FC<ILeftMenuItemProps> = ({ name, link, icon, submenu }: ILeftMenuItemProps) => {
    const classes = useLeftMenuItemStyles();
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

    const handleSubMenuToggle = (index: number) => {
        setOpenSubMenuIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <li className={classes.item}>
            {submenu ? (
                <>
                    <div className={classes.link} onClick={() => handleSubMenuToggle(0)}>
                        <div className={classes.itemText}>
                            {icon}
                            <span>{name}</span>
                        </div>
                        <span className={classes.arrow}>
                            {openSubMenuIndex === 0 ? <ArrowRight /> : <ArrowDown />}
                        </span>
                    </div>
                    {openSubMenuIndex === 0 && (
                        <ul className={classes.submenu}>
                            {submenu.map((item: ILeftMenuItemProps) => (
                                <li key={generateGuid()}>
                                    <NavLink to={{ pathname: item.link }} className={classes.subLink}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <NavLink className={classes.link} to={{ pathname: link }}>
                    <div className={classes.itemText}>
                        {icon}
                        <span>{name}</span>
                    </div>
                </NavLink>
            )}
        </li>
    );
};

export default LeftMenuItemComponent;

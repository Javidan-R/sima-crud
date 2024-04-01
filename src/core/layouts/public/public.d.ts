export interface ILeftMenuItemProps {
    name: string;
    link: string;
    icon: str;
    submenu: any;
}

export interface MenuItem {
    id: number;
    name: string;
    link: string;
    icon?: JSX.Element;
    submenu?: MenuItem[];
}

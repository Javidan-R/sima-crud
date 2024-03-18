import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';

const styles = {
    items: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    avatar: {
        cursor:'pointer',
        marginRight: '15px',
        '& img': {
            width: rem(30),
            height: rem(30),
            objectFit: 'cover',
            borderRadius: '5px',
        },
    },
    logout: {
        cursor: 'pointer',
        '& svg':{
            width: rem(30),
            height: rem(30),
            objectFit: 'cover',
            borderRadius: '5px',
        }
    },

};

export const useHeaderRightStyles = createUseStyles(styles);

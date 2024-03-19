import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
const styles = {
    logout: {
        cursor: 'pointer',
        '& svg':{
            width: rem(30),
            height: rem(30),
            objectFit: 'cover',
            borderRadius: '5px',
        }
    },
}

export const useLogOutStyles = createUseStyles(styles);

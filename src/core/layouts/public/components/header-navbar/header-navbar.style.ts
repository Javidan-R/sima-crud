import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';

const styles = {
    navbar: {
        backgroundColor: colors.darkBlue,
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            display: 'block',
            width: rem(100),
        }
    },
};

export const useHeaderNavbarStyles = createUseStyles(styles);

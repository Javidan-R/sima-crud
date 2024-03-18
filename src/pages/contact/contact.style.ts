import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import {breakpoint} from 'assets/styles/abstracts/mixins';

const styles = {
    testDiv: {
        color: 'cyan',
        backgroundColor: colors.darkBlue,
        fontSize: rem(20),
        [breakpoint(1200)] : {
            backgroundColor: colors.modalColor,
        },
        [breakpoint(700)] : {
            backgroundColor: colors.paleBlue,
        },
    },
    testText: {
        padding:'10px 5px ',
        color: colors.light,
    },
};

export const useContactStyles = createUseStyles(styles);

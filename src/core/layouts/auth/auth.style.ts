import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';

const styles = {
    auth: {

    },

    // section: {
    //     minHeight: '100vh',
    // },
    // wrapper: {
    //     minHeight: '100vh',
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    // },
    // pageSection: {
    // },
    // panel: {width: rem(480),},
    // or: {color: colors.authSubtitleText,},
    // invalidField: {border: '1px solid ' + colors.validationErrorColor,},
};


export const useAuthStyles = createUseStyles(styles);

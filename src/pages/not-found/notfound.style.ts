import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';


const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: rem(36),
        fontWeight: 500,
    },
    subtitle: {
        fontSize: rem(16),
    },
    panel: {
        width: rem(480),
    },
    invalidField: {
        border: '1px solid ' + colors.validationErrorColor,
        padding:'40px',
        textAlign:'center',
    },
    buttonField:{
        margin:'40px auto',
    },
    button: {
        padding:'5px 20px',
        width:rem(130),
        fontSize: rem(14),
        backgroundColor: colors.warningButtonColor,
        color: colors.ButtonColor,
    },
};

export const useNotFoundStyles = createUseStyles(styles);

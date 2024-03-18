import colors from 'assets/styles/abstracts/color';
import sizes from 'assets/styles/abstracts/sizes';
import {createUseStyles} from 'react-jss';

const styles = {
    sub: {
        background: colors.light,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 20px 20px rgb(126 142 177 / 12%)',
        
    },
    subItem: {
        display: 'flex',
        cursor: 'pointer',
        padding:'10px 0',
    },
    bars: {fontSize: '18px'},
    select:{
        padding:'5px 20px',
        borderRadius: sizes.borderRadius,
        border:0,
    },

};

export const useHeaderSubStyles = createUseStyles(styles);

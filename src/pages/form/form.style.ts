import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import {breakpoint} from 'assets/styles/abstracts/mixins';

const buttonColors = {
    buttonTextColor: '#fff',
    primaryButtonColor: '#4361ee',
    infoButtonColor: '#2196f3',
    successButtonColor: '#1abc9c',
    warningButtonColor: '#e2a03f',
    dangerButtonColor: '#e7515a',
    darkButtonColor: '#3b3f5c',
    mainButtonTextColor: '#3b3f5c',
    secondaryButtonColor: '#805dca',
    backgroundColor: '#c6c6c6',
  };
const styles = {
    testDiv: {
        color: buttonColors.primaryButtonColor,
        fontSize: rem(30),
        textAlign:'center',
        padding:'20px 0',
        [breakpoint(1200)] : {
            backgroundColor: colors.headerNavBg,
        },
        [breakpoint(700)] : {
            backgroundColor: colors.txtBlue,
        },
    },
    testText: {
        color: colors.mainGreen,
    },
    success: {
        backgroundColor: buttonColors.successButtonColor,
        color: buttonColors.buttonTextColor,
        '&:hover': {
          backgroundColor: '#16a085',
        },
      },

};

export const useFormStyles = createUseStyles(styles);

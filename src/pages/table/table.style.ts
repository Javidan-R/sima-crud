import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';

const useTableStyles = createUseStyles({
  button: {
    padding: '5px 12px',
    margin: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    minWidth:'85px',
  },
  // primary: {
  //   backgroundColor: colors.primaryButtonColor,
  //   color: colors.buttonTextColor,
  //   '&:hover': {
  //     backgroundColor: '#304ffe',
  //   },
  // },
  info: {
    backgroundColor: colors.infoButtonColor,
    color: colors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
  success: {
    backgroundColor: colors.successButtonColor,
    color: colors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#16a085',
    },
  },
  warning: {
    backgroundColor: colors.warningButtonColor,
    color: colors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#d39f2f',
    },
  },
  danger: {
    backgroundColor: colors.dangerButtonColor,
    color: colors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
//   dark: {
//     backgroundColor: colors.darkButtonColor,
//     color: colors.mainButtonTextColor,
//     '&:hover': {
//       backgroundColor: '#222',
//     },
//   },
//   secondary: {
//     backgroundColor: colors.secondaryButtonColor,
//     color: colors.buttonTextColor,
//     '&:hover': {
//       backgroundColor: '#6a1b9a',
//     },
//   },
});

export default useTableStyles;

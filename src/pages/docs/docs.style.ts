import { createUseStyles } from 'react-jss';

// Define button colors
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

// Define button styles
const buttonStyles = {
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  },
  primary: {
    backgroundColor: buttonColors.primaryButtonColor,
    color: buttonColors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#304ffe',
    },
  },
  info: {
    backgroundColor: buttonColors.infoButtonColor,
    color: buttonColors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
  success: {
    backgroundColor: buttonColors.successButtonColor,
    color: buttonColors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#16a085',
    },
  },
  warning: {
    backgroundColor: buttonColors.warningButtonColor,
    color: buttonColors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#d39f2f',
    },
  },
  danger: {
    backgroundColor: buttonColors.dangerButtonColor,
    color: buttonColors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  dark: {
    backgroundColor: buttonColors.darkButtonColor,
    color: buttonColors.mainButtonTextColor,
    '&:hover': {
      backgroundColor: '#222',
    },
  },
  secondary: {
    backgroundColor: buttonColors.secondaryButtonColor,
    color: buttonColors.buttonTextColor,
    '&:hover': {
      backgroundColor: '#6a1b9a',
    },
  },
};

export const useButtonStyles = createUseStyles(buttonStyles);

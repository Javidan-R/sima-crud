import fonts from '../abstracts/fonts';
import colors from '../abstracts/color';
import sizes from '../abstracts/sizes';

const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            fontFamily: fonts.fontMain,
            margin: 0,
            backgroundColor: colors.mainBg,
        },
        a: {textDecoration: 'none', '&:hover': {color: 'black',},},
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        '::-webkit-scrollbar': {width: 7, height: 7,},
        '::-webkit-scrollbar-track': {boxShadow: `inset 0 0 2px ${colors.main}`,},
        '::-webkit-scrollbar-thumb': {background: colors.main,},
    },
};

export default commonStyles;

import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import {createUseStyles} from 'react-jss';
import sizes from 'assets/styles/abstracts/sizes';
import {transition} from 'assets/styles/abstracts/mixins';

const styles = {
    footer: {
        paddingLeft: 0,
        marginTop: rem(20),
        color: colors.txtLight,
        fontSize: rem(13),
        letterSpacing: '1px',
        transition: transition(),

    },
    isOpen: {
        paddingLeft: rem(sizes.leftMenu),
    }
};

export const useFooterStyles = createUseStyles(styles);

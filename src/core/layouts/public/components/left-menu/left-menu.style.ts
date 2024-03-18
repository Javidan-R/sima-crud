import {createUseStyles} from 'react-jss';
import {transition} from 'assets/styles/abstracts/mixins';
import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';
import sizes from 'assets/styles/abstracts/sizes';

const styles = {
    leftMenu: {
        borderRight: `2px solid ${colors.border}`,
        position: 'fixed',
        left: '0',
        top: rem(sizes.leftMenuSpacing),
        width: rem(sizes.leftMenu),
        height: `calc(100vh - ${rem(sizes.leftMenuSpacing)})`,
        backgroundColor: '#F1F2F3',
        padding: `${rem(20)} ${rem(15)}`,
        transition: transition(),

    },
    hide: {transform: `translateX(-${rem(sizes.leftMenu)})`,},
};

export const useLeftMenuStyles = createUseStyles(styles);

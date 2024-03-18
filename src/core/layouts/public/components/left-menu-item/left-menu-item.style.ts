import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import {createUseStyles} from 'react-jss';
import fonts from 'assets/styles/abstracts/fonts';
import sizes from 'assets/styles/abstracts/sizes';
import {transition} from 'assets/styles/abstracts/mixins';

const styles = {
    item: {
        marginBottom: '4px',
    },
    link: {
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: sizes.borderRadiusSm,
        transition: transition(),
        cursor: 'pointer',
        padding: `${rem(10)} ${rem(5)} ${rem(10)} ${rem(15)}`,
        display: 'flex',
        justifyContent: 'space-between',

        '&:hover': {
            backgroundColor: colors.paleHover,
            boxShadow: colors.leftMenuShadow,
            color: colors.paleBlack,
            '& $itemText': {
                color: colors.paleBlack,
                '& svg': {
                    color: colors.paleBlack,
                },
            },
            '& $arrow': {
                '& svg': {
                    color: colors.paleBlack,
                },
            }
        },
        '&.active': {
            backgroundColor: 'white',
            boxShadow: colors.leftMenuShadow,
            color: colors.paleBlack,
            pointerEvents: 'none',
            '& $itemText': {
                color: colors.paleBlack,
                '& svg': {
                    color: colors.paleBlack,
                },
            },
            '& $arrow': {
                '& svg': {
                    color: colors.paleBlack,
                },
            }
        }

    },
    submenu: {
        marginLeft: rem(36),
    },
    itemText: {
        display: 'flex',
        alignItems: 'center',
        color: colors.paleBlue,
        fontFamily: fonts.fontBold,
        fontSize: rem(13),
        letterSpacing: '1px',
        transition: transition(),
        '& svg': {
            color: colors.paleBlue,
            marginRight: '10px',
            verticalAlign: 'middle',
            width: '20px',
            height: '20px',
            transition: transition(),
        },
    },
    subLink: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        transition: transition(),
        padding: `${rem(10)} ${rem(12)} ${rem(10)} ${rem(48)}`,
        paddingLeft: rem(24),
        fontSize: rem(13),
        color: colors.gray,

        '&::before': {
            content: '""',
            backgroundColor: colors.gray,
            position: 'absolute',
            height: '3px',
            width: '3px',
            top: '15px',
            left: '13px',
            borderRadius: '50%'
        },
        '&:hover': {
            color: colors.main,
            '&::before': {
                backgroundColor: colors.main,
            }
        },
        '&.active': {
            pointerEvents: 'none',
            color: colors.main,
            '&::before': {
                backgroundColor: colors.main,
            }
        },
    },
    arrow: {
        '& svg': {
            color: colors.paleBlue,
            verticalAlign: 'middle',
            width: '15px',
            height: '15px',
            transition: transition(),
        }
    },
    active: {}

};

export const useLeftMenuItemStyles = createUseStyles(styles);

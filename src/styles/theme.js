import COLORS from './colors'

export default {
    shadow: {
        sm: '0 0 3px rgba(0,0,0,.3)',
        md: '0 0 4px rgba(0,0,0,.4)',
    },
    radius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '18px',
    },
    padding: {
        sm: '5px',
        md: '8px',
        lg: '12px',
    },
    margin: {
        sm: '5px',
        md: '8px',
        lg: '12px',
        xl: '18px',
    },
    trans: {
        xsm: '.05s',
        sm: '.1s',
    },
    theme: {
        good: COLORS.green,
        goodAction: COLORS.darkGreen,
        bad: COLORS.red,
        badAction: COLORS.darkRed,
        badDisabled: COLORS.lightRed,
        bright: COLORS.white,
        medium: COLORS.gray,
        mediumLight: COLORS.lightGray,
    }
}

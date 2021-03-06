import COLORS from "./colors";

export default {
  shadow: {
    sm: "0 0 3px rgba(0,0,0,.3)",
    md: "0 0 4px rgba(0,0,0,.4)",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "18px",
  },
  padding: {
    xs: "2px",
    sm: "5px",
    md: "8px",
    lg: "12px",
    xl: "15px",
  },
  margin: {
    sm: "5px",
    md: "8px",
    lg: "12px",
    xl: "18px",
  },
  trans: {
    xsm: ".05s",
    sm: ".1s",
    lg: ".2s",
  },
  theme: {
    good: COLORS.green,
    goodAction: COLORS.darkGreen,
    bad: COLORS.red,
    badAction: COLORS.darkRed,
    badDisabled: COLORS.lightRed,
    offBright: COLORS.offWhite,
    bright: COLORS.white,
    medium: COLORS.gray,
    mediumLight: COLORS.medGray,
    light: COLORS.lightGray,
    dark: COLORS.black,
  },
};

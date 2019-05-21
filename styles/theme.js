export const breakpoint = {
  xxs: 300,
  xs: 576,
  sm: 720,
  md: 880,
  lg: 1024,
  lgr: 1280,
  xl: 1400,
  xxl: 1500,
};

export const mq = {
  xxs: `@media screen and (min-width: ${breakpoint.xxs}px)`,
  until_xxs: `@media screen and (max-width: ${breakpoint.xxs - 1}px)`,
  xs: `@media screen and (min-width: ${breakpoint.xs}px)`,
  until_xs: `@media screen and (max-width: ${breakpoint.xs - 1}px)`,
  sm: `@media screen and (min-width: ${breakpoint.sm}px)`,
  until_sm: `@media screen and (max-width: ${breakpoint.sm - 1}px)`,
  md: `@media screen and (min-width: ${breakpoint.md}px)`,
  until_md: `@media screen and (max-width: ${breakpoint.md - 1}px)`,
  lg: `@media screen and (min-width: ${breakpoint.lg}px)`,
  until_lg: `@media screen and (max-width: ${breakpoint.lg - 1}px)`,
  lgr: `@media screen and (min-width: ${breakpoint.lgr}px)`,
  until_lgr: `@media screen and (max-width: ${breakpoint.lgr - 1}px)`,
  xl: `@media screen and (min-width: ${breakpoint.xl}px)`,
  until_xl: `@media screen and (max-width: ${breakpoint.xl - 1}px)`,
  xxl: `@media screen and (min-width: ${breakpoint.xxl}px)`,
  until_xxl: `@media screen and (max-width: ${breakpoint.xxl - 1}px)`,
  vshrt: "@media screen and (min-height: 300px)",
  shrt: "@media screen and (min-height: 500px)",
  nrml: "@media screen and (min-height: 700px)",
  tall: "@media screen and (min-height: 1000px)",
  extraTall: "@media screen and (min-height: 1200px)",
  hiDpi: "@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)",
};

const gray = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  900: "#1d1d1b",
};

export const colors = {
  uiBlack: "#000",
  uiWhite: "#fff",
  gray: Object.assign(gray[500], gray),
};

export const weights = {
  regular: 400,
  medium: 500,
  bold: 600,
};

export default {
  breakpoint,
  colors,
  mediaQueries: mq,
  fontWeights: weights,
};

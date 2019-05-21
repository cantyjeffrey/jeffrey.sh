import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import fonts from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: Moderat;
    src: url(${fonts.ModeratRegularWoff}) format('woff2'),
          url(${fonts.ModeratRegularWoff2}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Moderat;
    src: url(${fonts.ModeratMediumWoff}) format('woff2'),
          url(${fonts.ModeratMediumWoff2}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Moderat;
    src: url(${fonts.ModeratBoldWoff}) format('woff2'),
          url(${fonts.ModeratBoldWoff2}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

html,
  body {
    width: 100%;
    height: 100%;
    text-size-adjust: none;
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-kerning: normal;
    font-variant-ligatures: contextual;
    font-style: normal;
    font-weight: 400;
    color: #222;
    font-size: 16px;
    line-height: 24px;
  }

  .fonts-subset body {
    font-family: ModeratSubset, sans-serif;
  }

  .fonts-loaded body {
    font-family: Moderat, sans-serif;
  }

  @media screen and (min-aspect-ratio: 2/3) {
    overflow: hidden;
  }

  @media print {}

  #viewport {
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 100%;
    display: flex;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & strong {
    font-weight: 500;
    color: #000;
  }

  & a {
    -webkit-tap-highight-color: transparent;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    color: #000;
    text-decoration: underline;
  }
`;

export default GlobalStyles;

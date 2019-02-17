import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
  ${normalize()}

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
    height: 100%;
    margin: 0;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  body {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: .03125em;
    text-decoration: inherit;
    text-transform: inherit;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .fonts-0 body {
    font-family: ApercuSubset, sans-serif;
  }

  .fonts-1 body {
    font-family: Apercu, sans-serif;
  }

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
`;

export default GlobalStyles;

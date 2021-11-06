import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *::before, *::after {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    overflow-x: hidden;
  }


  body {
    overflow-x: hidden;
    overflow-y: auto;
    -moz-transition: all 350ms ease-in-out;
    -o-transition: all 350ms ease-in-out;
    -webkit-transition: all 350ms ease-in-out;
    transition: all 350ms ease-in-out;
  }

  textarea:focus, textarea:focus-visible, input:focus, input:focus-visible {
    outline: none;
  }
`;

export default GlobalStyles;

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background: ${(props) => props.theme['background']};
    -webkit-font-smoothing: antialiased;

    /* overflow: hidden; */
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`
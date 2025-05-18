import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Press Start 2P', monospace;
  }

  body {
    background-color: #C5D9A8;
    color: #ffffff;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;

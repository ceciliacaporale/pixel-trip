import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Press Start 2P', monospace;
  }

  body {
    background-color:rgb(143, 164, 185);
    color: #ffffff;
  }

  button {
    cursor: pointer;
  }
`;

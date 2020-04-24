import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
		user-select: none;
  }

  html, body {
    background: #eaeaea;
    width: 100%;
    height: 100vh;
		user-select: none;
  }
  
  a {
    text-decoration: none;
  }
`;

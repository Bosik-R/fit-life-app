import { createGlobalStyle } from 'styled-components';
import '../fonts/Helvetica.ttf';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
	  box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
	  margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

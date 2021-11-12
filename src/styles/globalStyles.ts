import { createGlobalStyle } from 'styled-components';
import '../fonts/Helvetica.ttf';

export const GlobalStyles = createGlobalStyle`

  @font-face {
  font-family: "Helvetica";
  src: local("Helvetica"),
   url("../fonts/Helvetica.ttf") format("truetype");
  }

  * {
	  box-sizing: border-box;
  }
  
  body {
	  margin: 0;
    padding: 0;
    font-family: 'Helvetica';
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

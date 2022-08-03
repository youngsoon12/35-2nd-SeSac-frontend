import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;

    
  }
  
  body {
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

  a{
    cursor:pointer;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;

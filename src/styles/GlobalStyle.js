import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
  body {
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }

  a {
    color: black;
    cursor: pointer;
  }
  
  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

`;
export default GlobalStyle;

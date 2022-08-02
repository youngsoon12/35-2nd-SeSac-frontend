import { createGlobalStyle } from 'styled-components';
import OneMobilePop from './OneMobilePop.otf';

export default createGlobalStyle`
  
    @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url(${OneMobilePop}) format('otf');
    font-weight: normal;
    font-style: normal;
}
`;

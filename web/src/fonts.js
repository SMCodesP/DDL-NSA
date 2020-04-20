import { createGlobalStyle } from 'styled-components';

import Roboto from './fonts/Roboto-Regular.ttf';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto),
    url(${Roboto});
    font-weight: 400;
    font-style: normal;
  }
`;

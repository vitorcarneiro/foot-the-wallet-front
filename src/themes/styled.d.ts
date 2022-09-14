import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background1: string;
      background2: string;
      container: string;

      items: string;
      text: string;
    };
  }
}

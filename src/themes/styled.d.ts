import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      first: string;
      second: string;
      third: string;
      fourth: string;

      background1: string;
      background2: string;
      container: string;

      items: string;
      text: string;
    };
  }
}

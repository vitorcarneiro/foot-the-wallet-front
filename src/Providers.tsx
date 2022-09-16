import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { NavBarProvider } from './contexts/NavBarContext';
import SelectedThemeContext from './contexts/SelectedThemeContext';
import dark from './themes/dark';
import light from './themes/light';

interface IProvidersProps {
  children: React.ReactNode;
}

export default function Providers({
  children,
}: IProvidersProps): React.ReactElement {
  const { isDarkMode } = useContext(SelectedThemeContext);

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <NavBarProvider>
        <GlobalStyle />
        {children}
      </NavBarProvider>
    </ThemeProvider>
  );
}

import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import SelectedThemeContext from '../../contexts/SelectedThemeContext';
import { NavBarProvider } from '../../contexts/NavBarContext';
import { ContentContainer, PageContainer } from './style';
import GlobalStyle from '../GlobalStyle';
import NavBar from '../NavBar';
import ShowHideNavBarButton from '../NavBar/ShowHideButton';
import dark from '../../themes/dark';
import light from '../../themes/light';

function Layout() {
  const { isDarkMode } = useContext(SelectedThemeContext);
  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <NavBarProvider>
        <GlobalStyle />
        <PageContainer>
          <NavBar />
          <ContentContainer>
            <Outlet />
            <ShowHideNavBarButton />
          </ContentContainer>
        </PageContainer>
      </NavBarProvider>
    </ThemeProvider>
  );
}

export default Layout;

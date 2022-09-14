import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBarProvider } from '../../context/NavBarContext';
import NavBar from '../NavBar';
import ShowHideNavBarButton from '../NavBar/ShowHideButton';

import GlobalStyle from '../GlobalStyle';
import { ContentContainer, PageContainer } from './style';

function Layout() {
  return (
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
  );
}

export default Layout;

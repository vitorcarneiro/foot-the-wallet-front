import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle';
import NavBar from '../NavBar';
import ShowHideNavBarButton from '../NavBar/ShowHideButton';
import { ContentContainer, PageContainer } from './style';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <NavBar />
        <ContentContainer>
          <Outlet />
          <ShowHideNavBarButton />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

export default Layout;

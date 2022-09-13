import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle';
import NavBar from '../NavBar';
import { ContentContainer, PageContainer } from './style';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <NavBar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

export default Layout;

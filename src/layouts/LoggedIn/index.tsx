import React from 'react';
import { Outlet } from 'react-router-dom';

import { ContentContainer, PageContainer } from './style';
import NavBar from '../../components/NavBar';
import ShowHideNavBarButton from '../../components/NavBar/ShowHideButton';

function LoggedInLayout() {
  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <Outlet />
        <ShowHideNavBarButton />
      </ContentContainer>
    </PageContainer>
  );
}

export default LoggedInLayout;

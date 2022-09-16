import React from 'react';
import { Outlet } from 'react-router-dom';

import { PageContainer } from '../LoggedIn/style';

function NotLoggedLayout() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
}

export default NotLoggedLayout;

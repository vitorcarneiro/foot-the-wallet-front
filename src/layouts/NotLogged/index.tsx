import React from 'react';
import Card from '../../components/Card';
// import { Outlet } from 'react-router-dom';

import HeaderLogo from '../../components/HeaderLogo';
import LoginSignupBox from '../../components/LoginSignupBox';
import PageContainer from '../../components/PageContainer';
import {
  LoginContainer,
  Container,
  BiggerCircle,
  SmallerCircle,
} from '../../pages/Login/style';

function NotLoggedLayout() {
  return (
    <PageContainer>
      <LoginContainer>
        <HeaderLogo />
        <Container>
          <BiggerCircle />
          <Card />
          {/* <Outlet /> */}
          <LoginSignupBox />
          <SmallerCircle />
        </Container>
      </LoginContainer>
    </PageContainer>
  );
}

export default NotLoggedLayout;

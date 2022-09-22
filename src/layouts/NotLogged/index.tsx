import React from 'react';
import Card from '../../components/Card';
// import { Outlet } from 'react-router-dom';

import HeaderLogo from '../../components/HeaderLogo';
import LoginBox from '../../components/LoginBox';
import PageContainer from '../../components/PageContainer';
import {
  BiggerCircle,
  Container,
  LoginSignupContainer,
  Slogan,
  SmallerCircle,
} from './style';

function NotLoggedLayout() {
  return (
    <PageContainer>
      <LoginSignupContainer>
        <HeaderLogo />
        <Container>
          <BiggerCircle />
          <Card />
          <Slogan>MAKE YOUR FINANCES WORK</Slogan>
          {/* <Outlet /> */}
          <LoginBox />
          <SmallerCircle />
        </Container>
      </LoginSignupContainer>
    </PageContainer>
  );
}

export default NotLoggedLayout;

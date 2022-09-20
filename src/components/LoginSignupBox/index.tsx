import React from 'react';
import {
  LoginSignupBoxContainer,
  Border,
  BoxBackground,
  LoginSignupForm,
} from './style';

function LoginSignupBox() {
  return (
    <LoginSignupBoxContainer>
      <Border />
      <BoxBackground>
        <h1> Bem-vindo de volta!</h1>
        <LoginSignupForm>
          <h2>Email</h2>\
          <input type="email" />
          <h2>Password</h2>\
          <input type="password" />
        </LoginSignupForm>
      </BoxBackground>
    </LoginSignupBoxContainer>
  );
}

export default LoginSignupBox;

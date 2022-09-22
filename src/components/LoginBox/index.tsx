import React from 'react';
import { BsApple, BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import {
  LoginSignupBoxContainer,
  Border,
  BoxBackground,
  UserBox,
  SocialMediaContainer,
} from './style';

function LoginBox() {
  return (
    <LoginSignupBoxContainer>
      <Border />
      <BoxBackground>
        <h2>Bem vindo de volta!</h2>
        <form>
          <UserBox>
            <input type="text" name="" required />
            <label htmlFor="temp-id">Email</label>
          </UserBox>
          <UserBox>
            <input type="password" name="" required />
            <label htmlFor="temp-id">Senha</label>
          </UserBox>
          <a href="/home">
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
        <h3>- - - - - - OU - - - - - -</h3>
        <SocialMediaContainer>
          <button type="submit">
            <FcGoogle />
          </button>
          <button type="submit">
            <BsFacebook color="#4267B2" />
          </button>
          <button type="submit">
            <BsApple color="#333" />
          </button>
          <button type="submit">
            <BsGithub color="#6e5494" />
          </button>
        </SocialMediaContainer>
      </BoxBackground>
    </LoginSignupBoxContainer>
  );
}

export default LoginBox;

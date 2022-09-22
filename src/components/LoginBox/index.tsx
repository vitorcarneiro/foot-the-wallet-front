import React from 'react';
import { BsApple, BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import {
  Container,
  LoginBoxContainer,
  Border,
  BoxBackground,
  UserBox,
  SocialMediaContainer,
  SignupButton,
} from './style';

function LoginBox() {
  return (
    <Container>
      <LoginBoxContainer>
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
      </LoginBoxContainer>

      <LoginBoxContainer>
        <Border />
        <BoxBackground>
          <SignupButton>Registrar</SignupButton>
        </BoxBackground>
      </LoginBoxContainer>
    </Container>
  );
}

export default LoginBox;

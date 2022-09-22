import styled from 'styled-components';

export const LoginSignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: ${({ theme }) => theme.colors.text}35 0px 5px 15px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BiggerCircle = styled.div`
  min-width: 30vw;
  min-height: 30vw;
  border-radius: 50%;

  position: absolute;
  top: -30px;
  left: -100px;

  background-color: ${({ theme }) => theme.colors.first};
  box-shadow: ${({ theme }) => theme.colors.first}90 0px 5px 15px;
`;

export const SmallerCircle = styled.div`
  width: 25vw;
  height: 25vw;
  border-radius: 50%;

  position: absolute;
  bottom: -50px;
  right: -60px;

  background-color: ${({ theme }) => theme.colors.second};
  box-shadow: ${({ theme }) => theme.colors.second}90 0px 5px 15px;
`;

export const Slogan = styled.h1`
  all: unset;
  position: absolute;
  top: 10%;
  left: 10%;

  display: table-caption;
  word-spacing: 9999rem;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 70px;
  text-shadow: 10px 10px 5px #00000050;
`;

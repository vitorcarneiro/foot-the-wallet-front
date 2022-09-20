import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 80%;
  margin-top: 5%;
  border-radius: 15px;
  display: flex;

  background-color: ${({ theme }) => theme.colors.container};
  box-shadow: ${({ theme }) => theme.colors.text}35 0px 5px 15px;
`;

export const BiggerCircle = styled.div`
  min-width: 50vw;
  min-height: 50vw;
  border-radius: 50%;

  position: absolute;
  top: 30px;
  left: -100px;

  background-color: ${({ theme }) => theme.colors.first};
  box-shadow: ${({ theme }) => theme.colors.first}90 0px 5px 15px;
`;

export const SmallerCircle = styled.div`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;

  position: absolute;
  bottom: 30px;
  right: 20px;

  background-color: ${({ theme }) => theme.colors.second};
  box-shadow: ${({ theme }) => theme.colors.second}90 0px 5px 15px;
`;

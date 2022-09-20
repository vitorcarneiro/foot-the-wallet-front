import styled from 'styled-components';

export const LoginSignupBoxContainer = styled.div`
  width: 400px;
  height: 252px;

  position: absolute;
  top: 20px;
  right: 20px;
  align-self: flex-start;
  justify-self: right;
`;

export const Border = styled.div`
  width: 400px;
  height: 400px;

  position: absolute;

  border-radius: 30px;
  border: 2px solid transparent;
  background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.fourth},
      ${({ theme }) => theme.colors.third}
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  z-index: 2;
`;

export const BoxBackground = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;

  position: absolute;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.text}30;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
    font-size: 23px;
    font-family: 'Roboto', sans-serif;
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 30px;

    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-shadow: 1px 1px 2px #00000050;

    :last-child {
      bottom: 60px;
      font-weight: 500;
      letter-spacing: 4px;
    }
  }
`;

export const LoginSignupForm = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 11px;
    font-size: 20px;
    line-height: 25px;
    color: black;
    ::-webkit-input-placeholder {
      color: #d5d5d5;
    }
    :-moz-placeholder {
      color: #d5d5d5;
      opacity: 1;
    }
    ::-moz-placeholder {
      color: #d5d5d5;
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: #d5d5d5;
    }
    ::-ms-input-placeholder {
      color: #d5d5d5;
    }
    ::placeholder {
      color: #d5d5d5;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space;
  justify-content: space-evenly;
`;

export const LoginBoxContainer = styled.div`
  width: 400px;
  height: 450px;

  position: relative;
  align-self: flex-start;
  justify-self: right;

  :last-child {
    height: 120px;

    * {
      height: 120px;
    }
  }
`;

export const Border = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 2;

  border-radius: 30px;
  border: 5px solid transparent;
  background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.first},
      ${({ theme }) => theme.colors.second}
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
`;

export const BoxBackground = styled.div`
  width: 400px;
  height: 450px;
  padding: 30px;

  position: absolute;
  z-index: 2;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.text}20;
  backdrop-filter: blur(5px);

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  form {
    a {
      position: relative;

      display: inline-block;
      padding: 10px 20px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.5s;
      margin-top: 15px;
      margin-bottom: 20px;
      letter-spacing: 4px;

      :hover {
        background: #03e9f4;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.first},
          0 0 25px ${({ theme }) => theme.colors.first},
          0 0 50px ${({ theme }) => theme.colors.first},
          0 0 100px ${({ theme }) => theme.colors.first};
      }
    }

    span {
      position: absolute;
      display: block;

      :nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent,
          ${({ theme }) => theme.colors.text}
        );
        animation: btn-anim1 1s linear infinite;
      }

      :nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
          180deg,
          transparent,
          ${({ theme }) => theme.colors.text}
        );
        animation: btn-anim2 1s linear infinite;
        animation-delay: 0.25s;
      }

      :nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          270deg,
          transparent,
          ${({ theme }) => theme.colors.text}
        );
        animation: btn-anim3 1s linear infinite;
        animation-delay: 0.5s;
      }

      :nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
          360deg,
          transparent,
          ${({ theme }) => theme.colors.text}
        );

        animation: btn-anim4 1s linear infinite;
        animation-delay: 0.75s;
      }
    }

    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    word-spacing: 6px;
  }
`;

export const UserBox = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

export const SocialMediaContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  button {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #a5a4a4;
    background-color: ${({ theme }) => theme.colors.text};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export const SignupButton = styled.div`
  width: 100%;
  height: 100% !important;

  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  border: 1px solid #a5a4a4;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  cursor: pointer;
`;

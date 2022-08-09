import styled from "styled-components";

interface buttonProps {
  readonly isActive: boolean;
}

const ButtonForNav = styled.button<buttonProps>`
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > *:first-child {
    z-index: 1;
    ${(props) => (props.isActive ? "color: #fff;}" : "color: #3A3A3A;")}
  }

  & > *:not(:last-child) {
    z-index: 1;
  }

  & > *:not(:first-child):not(:last-child) {
    font-size: 14px;
    margin-top: 8px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: transparent;
    display: flex;
    flex-direction: column;
  }

  & > *:last-child {
    ${(props) => !props.isActive && "display: none;"}

    & > *:first-child {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #00ffff;

      filter: none;
      position: absolute;
      top: 12%;
      left: -35px;
    }

    & > *:last-child {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: linear-gradient(180deg, #ff00f2, #00ffff 60%);
      filter: blur(10px);
      opacity: 0.6;

      position: absolute;
      top: 10%;
      left: 15%;
      z-index: 0;
    }
  }

  &:hover {
    & > *:not(:first-child):not(:last-child) {
      ${(props) => (props.isActive ? "color: #fff;}" : "color: #3A3A3A;")}
    }
  }
`;

export default ButtonForNav;

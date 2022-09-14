import styled from 'styled-components';

const ShowHideButton = styled.button`
  all: unset;
  width: 20px;
  height: 24px;

  position: absolute;
  top: 52%;
  left: -10px;
  background-color: ${({ theme }) => theme.colors.container};

  font-weight: 700;
  font-size: 10px;
  border-radius: 50%;
  text-align: center;

  cursor: pointer;
`;

export default ShowHideButton;

import styled from 'styled-components';

export const Nav = styled.nav<{ isOpen: boolean }>`
  width: 40px;
  height: 100%;
  margin-right: 10px;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding-top: 5px;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  img {
    width: 40px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button``;

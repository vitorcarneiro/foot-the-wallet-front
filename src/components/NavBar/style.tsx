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
    position: relative;
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 40px;
    margin-bottom: 30px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;

export const Button = styled.button``;

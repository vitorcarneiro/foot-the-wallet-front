import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  color: ${({ theme }) => theme.colors.text};
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);

  font-weight: 700;
  font-size: 13px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    :last-child {
      transform: rotate(180deg);
    }
  }

  img {
    width: 25px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;

export default Header;

import styled from 'styled-components';

export const NavButton = styled.button<{ isSelected: boolean }>`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  font-weight: 700;
  font-size: 10px;
  color: ${({ isSelected, theme }) =>
    isSelected ? '#fafafa' : theme.colors.items};

  :hover {
    p {
      color: ${({ isSelected, theme }) =>
        isSelected ? 'fafafa' : theme.colors.items};
    }
  }

  svg {
    cursor: pointer;
  }

  a {
    all: unset;
  }

  p {
    color: transparent;
  }
`;

export const SwitchContainer = styled.li<{ isDarkMode: boolean }>`
  position: absolute;
  bottom: 30px;
  transform: rotate(90deg);

  svg {
    transform: rotate(-90deg);
    color: ${({ isDarkMode, theme }) =>
      isDarkMode ? theme.colors.background2 : theme.colors.background1};
  }
`;

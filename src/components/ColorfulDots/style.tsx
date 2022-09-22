import styled from 'styled-components';

export const DotContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  :nth-child(1) {
    background: ${({ theme }) => theme.colors.first};
  }

  :nth-child(2) {
    background: ${({ theme }) => theme.colors.second};
  }

  :nth-child(3) {
    background: ${({ theme }) => theme.colors.third};
  }

  :nth-child(4) {
    background: ${({ theme }) => theme.colors.fourth};
  }
`;

import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 15px 10px;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.background1} 33%,
    ${({ theme }) => theme.colors.background2} 100%
  );
`;

export const ContentContainer = styled.main`
  width: 100%;
  height: 100%;
  position: relative;

  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;

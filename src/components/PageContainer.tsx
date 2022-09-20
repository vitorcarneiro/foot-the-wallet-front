import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 15px 10px;
  overflow: hidden;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.background1} 33%,
    ${({ theme }) => theme.colors.background2} 100%
  );
`;

export default PageContainer;

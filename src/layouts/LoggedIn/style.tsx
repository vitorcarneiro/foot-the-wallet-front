import styled from 'styled-components';

const ContentContainer = styled.main`
  width: 100%;
  height: 100%;
  position: relative;

  background-color: ${({ theme }) => theme.colors.container};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.colors.text}35 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;

export default ContentContainer;

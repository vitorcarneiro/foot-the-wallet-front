import styled from 'styled-components';

const SwitchContainer = styled.li`
  position: absolute;
  bottom: 30px;
  transform: rotate(90deg);

  svg {
    transform: rotate(-90deg);
    color: ${({ theme }) => theme.colors.background1};
  }
`;

export default SwitchContainer;

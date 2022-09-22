import styled from 'styled-components';
import { FcSimCardChip } from 'react-icons/fc';
import { RiWifiLine } from 'react-icons/ri';

export const CardContainer = styled.div`
  width: 400px;
  height: 252px;

  position: relative;

  transform: rotate(-15deg);
  align-self: flex-end;
  margin-bottom: 5vh;
`;

export const Border = styled.div`
  width: 400px;
  height: 252px;

  position: absolute;

  border-radius: 30px;
  border: 2px solid transparent;
  background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.second},
      ${({ theme }) => theme.colors.first}
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const CardData = styled.div`
  width: 400px;
  height: 252px;

  position: absolute;

  background-color: #00000050;
  border-radius: 30px;

  p {
    position: absolute;
    bottom: 30px;
    left: 30px;

    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-shadow: 1px 1px 2px #00000050;

    :last-child {
      bottom: 60px;
      font-weight: 500;
      letter-spacing: 4px;
    }
  }
`;

export const CardChip = styled(FcSimCardChip)`
  position: absolute;
  top: 80px;
  left: 30px;
  width: 50px;
  height: 50px;
`;

export const WifiSymbol = styled(RiWifiLine)`
  position: absolute;

  width: 20px;
  height: 20px;

  top: 95px;
  left: 85px;
  transform: rotate(90deg);

  color: #fff;
`;

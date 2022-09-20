import React from 'react';
import { CardContainer, CardChip, Border, CardData, WifiSymbol } from './style';

function Card() {
  return (
    <CardContainer>
      <Border />
      <CardData>
        <CardChip />
        <WifiSymbol />
        <p>CREDIT</p>
        <p>4521 0000 0000 0000</p>
      </CardData>
    </CardContainer>
  );
}

export default Card;

import React from 'react';
import { TbDoorExit } from 'react-icons/tb';
import NavButton from './style';

function Exit() {
  return (
    <li>
      <NavButton isSelected={false}>
        <TbDoorExit size={20} />
        <p>Exit</p>
      </NavButton>
    </li>
  );
}

export default Exit;

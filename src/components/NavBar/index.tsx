import React from 'react';
import { BsGrid, BsPeople } from 'react-icons/bs';

import {
  IoWalletOutline,
  IoBarChartOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import { TbDoorExit } from 'react-icons/tb';

import { Nav } from './style';

import logo from '../../assets/logo-white-bg.png';

function NavBar() {
  return (
    <Nav>
      <img src={logo} alt="foot the wallet logo" />
      <ul>
        <li>
          <BsGrid size={25} color="#5a5a5a" />
        </li>
        <li>
          <IoWalletOutline size={25} color="#5a5a5a" />
        </li>
        <li>
          <IoBarChartOutline size={25} color="#5a5a5a" />
        </li>
        <li>
          <BsPeople size={25} color="#5a5a5a" />
        </li>
        <li>
          <IoSettingsOutline size={25} color="#5a5a5a" />
        </li>
        <li>
          <TbDoorExit size={25} color="#5a5a5a" />
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;

import React from 'react';
import Header from './style';
import logo from '../../assets/logo-white-bg.png';
import ColorfulDots from '../ColorfulDots';

function HeaderLogo() {
  return (
    <Header>
      <ColorfulDots />
      <div>
        <img src={logo} alt="foot the wallet logo" />
        <p>Foot The Wallet</p>
      </div>
      <ColorfulDots />
    </Header>
  );
}

export default HeaderLogo;

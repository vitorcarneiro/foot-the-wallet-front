import React from 'react';
import Header from './style';
import logo from '../../assets/logo-white-bg.png';

function HeaderLogo() {
  return (
    <Header>
      <img src={logo} alt="foot the wallet logo" />
      <p>Foot The Wallet</p>
    </Header>
  );
}

export default HeaderLogo;

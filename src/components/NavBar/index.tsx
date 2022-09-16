import React, { useContext } from 'react';

import NavBarContext from '../../contexts/NavBarContext';
import { Nav } from './style';

import logoForDarkTheme from '../../assets/logo-white-bg.png';
import logoForLightTheme from '../../assets/logo-blue-bg.png';
import Home from './Buttons/Home';
import Wallet from './Buttons/Wallet';
import Charts from './Buttons/Charts';
import People from './Buttons/People';
import Settings from './Buttons/Settings';
import Exit from './Buttons/Exit';
import SelectedThemeContext from '../../contexts/SelectedThemeContext';
import ThemeSwitch from '../ThemeSwitch';

function NavBar() {
  const { showNavBar } = useContext(NavBarContext);
  const { isDarkMode, setIsDarkMode } = useContext(SelectedThemeContext);

  return (
    <Nav isOpen={showNavBar}>
      <img
        src={isDarkMode ? logoForDarkTheme : logoForLightTheme}
        alt="foot the wallet logo"
      />
      <ul>
        <Home />
        <Wallet />
        <Charts />
        <People />
        <Settings />
        <Exit />
        <ThemeSwitch />
      </ul>
    </Nav>
  );
}

export default NavBar;

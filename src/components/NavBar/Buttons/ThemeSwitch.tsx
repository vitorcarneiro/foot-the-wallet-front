import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { BsFillMoonFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';
import { shade, lighten } from 'polished';

import { SwitchContainer } from './style';
import SelectedThemeContext from '../../../contexts/SelectedThemeContext';

function ThemeSwitch() {
  const { isDarkMode, setIsDarkMode } = useContext(SelectedThemeContext);
  const { colors } = useContext(ThemeContext);

  // console.log(isDarkMode);
  return (
    <SwitchContainer>
      <Switch
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        handleDiameter={30}
        offColor={shade(0.1, colors.items)}
        onColor={lighten(0.1, colors.items)}
        offHandleColor={colors.items}
        onHandleColor={colors.items}
        height={25}
        width={60}
        checkedHandleIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <BsFillMoonFill size={20} />
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <RiSunFill size={20} />
          </div>
        }
        uncheckedHandleIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <RiSunFill size={20} />
          </div>
        }
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <BsFillMoonFill size={20} />
          </div>
        }
      />
    </SwitchContainer>
  );
}

export default ThemeSwitch;

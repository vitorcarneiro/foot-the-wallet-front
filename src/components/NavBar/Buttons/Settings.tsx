import React, { useContext } from 'react';
import { IoSettings, IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import NavBarContext from '../../../contexts/NavBarContext';
import NavButton from './style';

function Settings() {
  const { selectedNav, setSelectedNav } = useContext(NavBarContext);
  return (
    <li>
      <NavButton isSelected={selectedNav === '/settings'}>
        <Link to="/settings">
          {selectedNav === '/settings' ? (
            <IoSettings size={20} />
          ) : (
            <IoSettingsOutline
              onClick={() => setSelectedNav('/settings')}
              size={20}
            />
          )}
        </Link>
        <p>Settings</p>
      </NavButton>
    </li>
  );
}

export default Settings;

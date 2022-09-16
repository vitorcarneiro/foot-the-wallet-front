import React, { useContext } from 'react';
import { IoWallet, IoWalletOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import NavBarContext from '../../../contexts/NavBarContext';
import NavButton from './style';

function Wallet() {
  const { selectedNav, setSelectedNav } = useContext(NavBarContext);
  return (
    <li>
      <NavButton isSelected={selectedNav === '/wallet'}>
        <Link to="/wallet">
          {selectedNav === '/wallet' ? (
            <IoWallet size={20} />
          ) : (
            <IoWalletOutline
              onClick={() => setSelectedNav('/wallet')}
              size={20}
            />
          )}
        </Link>
        <p>Wallet</p>
      </NavButton>
    </li>
  );
}

export default Wallet;

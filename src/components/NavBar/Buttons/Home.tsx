import React, { useContext } from 'react';
import { BsGrid, BsGridFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NavBarContext from '../../../contexts/NavBarContext';
import { NavButton } from './style';

function Home() {
  const { selectedNav, setSelectedNav } = useContext(NavBarContext);
  return (
    <li>
      <NavButton isSelected={selectedNav === '/'}>
        <Link to="/">
          {selectedNav === '/' ? (
            <BsGridFill size={20} />
          ) : (
            <BsGrid onClick={() => setSelectedNav('/')} size={20} />
          )}
        </Link>
        <p>Home</p>
      </NavButton>
    </li>
  );
}

export default Home;

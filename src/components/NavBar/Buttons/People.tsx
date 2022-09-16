import React, { useContext } from 'react';
import { BsPeople, BsPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NavBarContext from '../../../contexts/NavBarContext';
import NavButton from './style';

function People() {
  const { selectedNav, setSelectedNav } = useContext(NavBarContext);
  return (
    <li>
      <NavButton isSelected={selectedNav === '/people'}>
        <Link to="/people">
          {selectedNav === '/people' ? (
            <BsPeopleFill size={20} />
          ) : (
            <BsPeople onClick={() => setSelectedNav('/people')} size={20} />
          )}
        </Link>
        <p>People</p>
      </NavButton>
    </li>
  );
}

export default People;

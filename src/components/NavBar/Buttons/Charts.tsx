import React, { useContext } from 'react';
import { IoBarChart, IoBarChartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import NavBarContext from '../../../contexts/NavBarContext';
import NavButton from './style';

function Charts() {
  const { selectedNav, setSelectedNav } = useContext(NavBarContext);
  return (
    <li>
      <NavButton isSelected={selectedNav === '/charts'}>
        <Link to="/charts">
          {selectedNav === '/charts' ? (
            <IoBarChart size={20} />
          ) : (
            <IoBarChartOutline
              onClick={() => setSelectedNav('/charts')}
              size={20}
            />
          )}
        </Link>
        <p>Charts</p>
      </NavButton>
    </li>
  );
}

export default Charts;

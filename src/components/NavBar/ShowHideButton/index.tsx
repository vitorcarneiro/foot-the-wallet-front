import React, { useContext } from 'react';

import ShowHideButton from './style';
import NavBarContext from '../../../context/NavBarContext';

function ShowHideNavBarButton() {
  const { showNavBar, setShowNavBar } = useContext(NavBarContext);

  return (
    <ShowHideButton onClick={() => setShowNavBar(!showNavBar)}>
      {showNavBar ? '<' : '>'}
    </ShowHideButton>
  );
}

export default ShowHideNavBarButton;

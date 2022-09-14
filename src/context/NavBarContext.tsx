import React, { createContext, useMemo, useState } from 'react';

interface INavBarContextProps {
  showNavBar: boolean;
  setShowNavBar: (newState: boolean) => void;
  selectedNav: number;
  setSelectedNav: (newState: number) => void;
}

const initalValue = {
  showNavBar: false,
  setShowNavBar: () => {},
  selectedNav: 0,
  setSelectedNav: () => {},
};

interface INavBarProviderProps {
  children: React.ReactNode;
}

const NavBarContext = createContext<INavBarContextProps>(initalValue);
export default NavBarContext;

export function NavBarProvider({
  children,
}: INavBarProviderProps): React.ReactElement {
  const [showNavBar, setShowNavBar] = useState(initalValue.showNavBar);
  const [selectedNav, setSelectedNav] = useState(initalValue.selectedNav);

  const navBarContext = useMemo(
    () => ({
      showNavBar,
      setShowNavBar,
      selectedNav,
      setSelectedNav,
    }),
    [showNavBar, selectedNav]
  );

  return (
    <NavBarContext.Provider value={navBarContext}>
      {children}
    </NavBarContext.Provider>
  );
}

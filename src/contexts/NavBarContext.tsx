import React, { createContext, useMemo, useState } from 'react';

interface INavBarContextProps {
  showNavBar: boolean;
  setShowNavBar: (newState: boolean) => void;
  selectedNav: string;
  setSelectedNav: (newState: string) => void;
}

const initalValue = {
  showNavBar: true,
  setShowNavBar: () => {},
  selectedNav: window.location.pathname,
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

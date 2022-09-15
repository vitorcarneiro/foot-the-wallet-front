import React, { createContext, useMemo } from 'react';
import usePersistedState from '../utils/usePersistedState';

interface IthemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: (newState: boolean) => void;
}

const initalValue = {
  isDarkMode: true,
  setIsDarkMode: () => {},
};

interface IThemeProviderProps {
  children: React.ReactNode;
}

const SelectedThemeContext = createContext<IthemeContextProps>(initalValue);
export default SelectedThemeContext;

export function SelectedThemeProvider({
  children,
}: IThemeProviderProps): React.ReactElement {
  const [isDarkMode, setIsDarkMode] = usePersistedState<boolean>(
    'isDarkMode',
    initalValue.isDarkMode
  );

  const selectedThemeContext = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
    }),
    [isDarkMode, setIsDarkMode]
  );

  return (
    <SelectedThemeContext.Provider value={selectedThemeContext}>
      {children}
    </SelectedThemeContext.Provider>
  );
}

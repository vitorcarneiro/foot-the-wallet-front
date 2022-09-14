import React, { createContext, useMemo, useState } from 'react';

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
  const [isDarkMode, setIsDarkMode] = useState(initalValue.isDarkMode);

  const selectedThemeContext = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
    }),
    [isDarkMode]
  );

  return (
    <SelectedThemeContext.Provider value={selectedThemeContext}>
      {children}
    </SelectedThemeContext.Provider>
  );
}

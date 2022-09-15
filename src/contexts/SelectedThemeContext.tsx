import React, { createContext, useEffect, useMemo, useState } from 'react';

interface IthemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: (newState: boolean) => void;
}

const initalValue = {
  isDarkMode: true,
  setIsDarkMode: () => { },
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

  useEffect(
    () =>
      setIsDarkMode(
        JSON.parse(window.localStorage.getItem('isDarkMode') || '')
      ),
    []
  );

  useEffect(() => {
    window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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

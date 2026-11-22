import React, { createContext, useContext, useState, useEffect } from 'react';
import { themeRepository } from '../../features/theme/data/themeRepository';
import { THEMES } from '../../core/constants/themeConstants';
import { ThemeModel } from '../../features/theme/domain/Theme';

const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themeRepository.getInitialTheme);

  useEffect(() => {
    themeRepository.saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const model = new ThemeModel(prevTheme);
      return model.toggle();
    });
  };

  const isDark = theme === THEMES.DARK;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

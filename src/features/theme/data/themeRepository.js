import { THEMES, THEME_STORAGE_KEY } from '../../../core/constants/themeConstants';

export const themeRepository = {
  getInitialTheme() {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme && (savedTheme === THEMES.LIGHT || savedTheme === THEMES.DARK)) {
        return savedTheme;
      }
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return THEMES.DARK;
      }
    } catch {
      // Fallback
    }
    return THEMES.LIGHT;
  },

  saveTheme(theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      if (theme === THEMES.DARK) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('Failed to save theme in localStorage', e);
    }
  },
};

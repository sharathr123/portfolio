import { THEMES } from '../../../core/constants/themeConstants';

export class ThemeModel {
  constructor(mode = THEMES.LIGHT) {
    this.mode = mode;
  }

  isDark() {
    return this.mode === THEMES.DARK;
  }

  toggle() {
    return this.mode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  }
}

export default {
  getAvailableThemes: (state: object) => {
    return state.availableThemes;
  },

  getDefaultTheme: (state: object) => {
    return state.defaultTheme;
  },

  getCurrentTheme: (state: object) => {
    return state.currentTheme;
  },
};
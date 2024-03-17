export default {
  getAvailableThemes: (state: object) => {
    return state.availableThemes;
  },

  getDefaultTheme: (state: any) => {
    return state.defaultTheme;
  },

  getTheme: (state: any) => {
    return state.theme;
  },
};
export default {
  getAvailableLocales: (state: object) => {
    return state.availableLocales;
  },

  getDefaultLocale: (state: object) => {
    return state.defaultLocale;
  },

  getCurrentLocale: (state: object) => {
    return state.currentLocale;
  },
};
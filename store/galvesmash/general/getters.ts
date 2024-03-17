export default {
  getAvailableLocales: (state: object) => {
    return state.availableLocales;
  },

  getDefaultLocale: (state: object) => {
    return state.defaultLocale;
  },

  getLocale: (state: object) => {
    return state.locale;
  },
};
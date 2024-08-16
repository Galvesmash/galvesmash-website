export default {
  getAvailableLocales: (state) => {
    return state.availableLocales
  },

  getDefaultLocale: (state) => {
    return state.defaultLocale
  },

  getCurrentLocale: (state) => {
    return state.currentLocale
  }
};
export default {
  getAvailableThemes: (state) => {
    return state.availableThemes
  },

  getCurrentTheme: (state) => {
    return state.currentTheme
  },

  getDefaultTheme: (state) => {
    return state.defaultTheme
  },

  getIsMobileView: (state) => {
    return state.isMobileView
  }
};
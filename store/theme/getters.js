export default {
  getAvailableThemes: (state) => {
    return state.availableThemes
  },

  getCurrentTheme: (state) => {
    return state.currentTheme
  },

  getAvailableLayouts: (state) => {
    return state.availableLayouts
  },

  getCurrentLayout: (state) => {
    return state.currentLayout
  }
};
import type { ThemeStore } from '~/types'

export default {
  getAvailableThemes: (state: ThemeStore) => {
    return state.availableThemes
  },

  getCurrentTheme: (state: ThemeStore) => {
    return state.currentTheme
  },

  getCurrentLayout: (state: ThemeStore) => {
    return state.currentLayout
  }
}
import type { LocaleStore } from '~/types'

export default {
  getAvailableLocales: (state: LocaleStore) => {
    return state.availableLocales
  },

  getDefaultLocale: (state: LocaleStore) => {
    return state.defaultLocale
  },

  getCurrentLocale: (state: LocaleStore) => {
    return state.currentLocale
  }
}

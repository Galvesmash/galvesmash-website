import getters from './getters'
import actions from './actions'

import type { ThemeStore } from '~/types'

const state = (): ThemeStore => ({
  availableThemes: [
    'dark',
    'light'
  ],
  currentTheme: 'dark',
  currentLayout: 'default'
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
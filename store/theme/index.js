import getters from './getters'
import actions from './actions'

const state = () => ({
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
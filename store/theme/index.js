import getters from './getters'
import actions from './actions'

const state = () => ({
  availableThemes: [
    'dark',
    'light'
  ],
  currentTheme: 'dark',
  defaultTheme: 'dark',
  isMobileView: false
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
import getters from './getters'
import actions from './actions'

const state = () => ({
  availableLocales: [
    'en',
    'pt-br'
  ],
  currentLocale: 'en',
  defaultLocale: 'en'
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
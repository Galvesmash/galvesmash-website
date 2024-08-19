import getters from './getters'
import actions from './actions'

const state = () => ({
  drawerMenu: false,
  isMobileView: false
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
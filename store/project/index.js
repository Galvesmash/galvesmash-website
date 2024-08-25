import getters from './getters'
import actions from './actions'

const state = () => ({
  projectList: [],
  selectedProject: null
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}
import getters from './getters'
import actions from './actions'

import type { ProjectStore } from '~/types'

const state = (): ProjectStore => ({
  projectList: [],
  selectedProject: null
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}

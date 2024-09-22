import getters from './getters'
import actions from './actions'

import type { ExperienceStore } from '~/types'

const state = (): ExperienceStore => ({
  experienceList: []
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}

import getters from './getters'
import actions from './actions'

import type { SkillStore } from '~/types'

const state = (): SkillStore => ({
  skillList: []
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}

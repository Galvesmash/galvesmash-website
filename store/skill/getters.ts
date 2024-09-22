import type { SkillStore } from '~/types'

export default {
  getSkillList: (state: SkillStore) => {
    return state.skillList
  }
}

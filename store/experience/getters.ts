import type { ExperienceStore } from '~/types'

export default {
  getExperienceList: (state: ExperienceStore) => {
    return state.experienceList
  }
}

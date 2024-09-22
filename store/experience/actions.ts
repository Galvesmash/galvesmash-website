import { useExperienceStore } from '~/store'

import type { ExperienceObject } from '~/types'

export default {
  reset() {
    const store = useExperienceStore()

    store.experienceList = []
  },

  setExperienceList(payload: ExperienceObject[]) {
    const store = useExperienceStore()

    store.experienceList = payload || []
  }
}

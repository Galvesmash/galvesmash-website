import { useSkillStore } from '~/store'

import type { SkillObject } from '~/types'

export default {
  reset() {
    const store = useSkillStore()

    store.skillList = []
  },

  setSkillList(payload: SkillObject[]) {
    const store = useSkillStore()

    store.skillList = payload || []
  }
}

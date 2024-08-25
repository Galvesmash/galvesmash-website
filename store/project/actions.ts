// import axios from 'axios'
// import consts from '@/static/ts/consts'
import { useProjectStore } from '~/store'

import type { ProjectObject } from '~/types'

export default {
  reset() {
    const store = useProjectStore()

    store.projectList = []
    store.selectedProject = null
  },

  setProjectList(payload: ProjectObject[]) {
    const store = useProjectStore()

    store.projectList = payload || []
  },

  setSelectedProject(payload: string) {
    const store = useProjectStore()

    store.selectedProject = payload
  }
}
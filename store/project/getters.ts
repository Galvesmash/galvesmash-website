import type { ProjectStore } from '~/types'

export default {
  getProjectList: (state: ProjectStore) => {
    return state.projectList
  },

  getSelectedProject: (state: ProjectStore) => {
    return state.selectedProject
  }
}

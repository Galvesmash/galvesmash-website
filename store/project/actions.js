// import axios from 'axios'
// import consts from '@/static/ts/consts'

export default {
  reset() {
    this.$reset()
  },

  setProjectList(payload) {
    this.projectList = payload || []
  },

  setSelectedProject(payload) {
    this.selectedProject = payload
  }
}
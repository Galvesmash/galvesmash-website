// import axios from 'axios'
// import consts from '@/static/ts/consts'

export default {
  reset() {
    this.$reset()
  },

  setIsMobileView(payload) {
    this.isMobileView = payload
  },

  setDrawerMenu(payload) {
    this.drawerMenu = payload
  }
}
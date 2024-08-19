// import axios from 'axios'
// import consts from '@/static/ts/consts'

export default {
  reset() {
    // this.defaultTheme = 'dark'
    // this.theme = ''
    this.$reset()
  },

  setCurrentTheme(payload) {
    this.currentTheme = payload
  },

  setCurrentLayout(payload) {
    this.currentLayout = payload
  }
}
import type { GeneralStore } from '~/types'

export default {
  appVersion: (state: GeneralStore) => {
    return state.packageVersion
  },

  getIsMobileView: (state: GeneralStore) => {
    return state.isMobileView
  },

  getDrawerMenu: (state: GeneralStore) => {
    return state.drawerMenu
  }
}

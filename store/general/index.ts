import getters from './getters'
import actions from './actions'

import type { GeneralStore } from '~/types'

const state = (): GeneralStore => ({
  packageVersion: process.env.VUE_APP_VERSION || '0',
  drawerMenu: false,
  isMobileView: true
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}

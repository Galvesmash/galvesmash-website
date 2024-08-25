// import axios from 'axios'
// import consts from '@/static/ts/consts'
import { useGeneralStore } from '~/store'

export default {
  reset() {
    const store = useGeneralStore()

    store.drawerMenu = false
    store.isMobileView = false
  },

  setIsMobileView(payload: boolean) {
    const store = useGeneralStore()

    store.isMobileView = payload
  },

  setDrawerMenu(payload: boolean) {
    const store = useGeneralStore()

    store.drawerMenu = payload
  }
}
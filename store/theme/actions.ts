// import axios from 'axios'
// import consts from '@/static/ts/consts'
import { useThemeStore } from '~/store'

export default {
  reset() {
    const store = useThemeStore()

    store.availableThemes = [
      'dark',
      'light'
    ]
    store.currentTheme = 'dark'
    store.currentLayout = 'default'
  },

  setCurrentTheme(payload: string) {
    const store = useThemeStore()

    store.currentTheme = payload
  },

  setCurrentLayout(payload: string) {
    const store = useThemeStore()

    store.currentLayout = payload
  }
}
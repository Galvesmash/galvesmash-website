// import axios from 'axios'
// import consts from '@/static/ts/consts'
import { useLocaleStore } from '~/store'

export default {
  reset() {
    const store = useLocaleStore()

    store.availableLocales = [
      'en',
      'pt-br'
    ];
    store.currentLocale = 'en'
    store.defaultLocale = 'en'
  },

  setCurrentLocale(payload: string) {
    const store = useLocaleStore()

    store.currentLocale = payload
  }
}
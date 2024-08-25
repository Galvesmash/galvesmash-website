import getters from './getters'
import actions from './actions'

import type { LocaleStore } from '~/types'

const state = (): LocaleStore => ({
  availableLocales: [
    'en',
    'pt-br'
  ],
  currentLocale: 'en',
  defaultLocale: 'en'
})

export default {
  namespaced: true,
  state,
  getters,
  actions
}

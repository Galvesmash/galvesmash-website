import { defineStore } from 'pinia'
import general from './general'
import locale from './locale'
import project from './project'
import theme from './theme'

export const useMainStore = defineStore('main', {
  state: () => ({
    packageVersion: process.env.VUE_APP_VERSION || '0',
  }),
  getters: () => ({
    appVersion: (state) => {
      return state.packageVersion
    },
  }),
});

export const useGeneralStore = defineStore('general', general)
export const useLocaleStore = defineStore('locale', locale)
export const useProjectStore = defineStore('project', project)
export const useThemeStore = defineStore('theme', theme)

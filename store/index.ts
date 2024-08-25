import { defineStore } from 'pinia'
import general from './general'
import locale from './locale'
import project from './project'
import theme from './theme'

export const useGeneralStore = defineStore('general', general)
export const useLocaleStore = defineStore('locale', locale)
export const useProjectStore = defineStore('project', project)
export const useThemeStore = defineStore('theme', theme)

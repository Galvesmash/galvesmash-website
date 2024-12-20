import { defineStore } from 'pinia'
import general from './general'
import locale from './locale'
import project from './project'
import skill from './skill'
import theme from './theme'

export const useGeneralStore = defineStore('general', general)
export const useLocaleStore = defineStore('locale', locale)
export const useProjectStore = defineStore('project', project)
export const useSkillStore = defineStore('skill', skill)
export const useThemeStore = defineStore('theme', theme)

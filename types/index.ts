import { NullValue } from "rollup"

export interface ExperienceObject {
  company: string
  end: string
  role: string
  start: string
  text: string
}

export interface ExperienceStore {
  experienceList: ExperienceObject[]
}

export interface GeneralStore {
  packageVersion: string
  drawerMenu: boolean
  isMobileView: boolean
}

export interface LocaleStore {
  availableLocales: string[]
  currentLocale: string
  defaultLocale: string
}

export interface LogoObject {
  color?: string
  height?: string
  width?: string
}

export interface ModalTemplate {
  backgroundColor?: string
  color?: string
  dialog: boolean
  maxWidth?: number
  prependIcon?: string | null
  text?: string
  title?: string
}

export interface ProjectObject {
  cover: string
  href: string
  subtitle: string
  title: string
}

export interface ProjectStore {
  projectList: ProjectObject[]
  selectedProject: string | null
}

export interface SkillObject {
  icon: string
  translation: string
}

export interface SkillStore {
  skillList: SkillObject[]
}

export interface ThemeStore {
  availableThemes: string[]
  currentTheme: string
  currentLayout: string
}

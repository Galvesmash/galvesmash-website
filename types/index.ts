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

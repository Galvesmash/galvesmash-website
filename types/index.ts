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

export interface ProjectStore {
  projectList: ProjectObject[]
  selectedProject: string | null
}

export interface ThemeStore {
  availableThemes: string[]
  currentTheme: string
  currentLayout: string
}

export interface ProjectObject {
  cover: string
  subtitle: string
  title: string
}

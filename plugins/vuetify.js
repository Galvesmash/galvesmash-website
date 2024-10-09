import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases as aliasesFa, fa } from 'vuetify/iconsets/fa-svg'
import { aliases as aliasesMdi, mdi } from 'vuetify/iconsets/mdi'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import colors from '../public/colors'

library.add(fas, far, fab)

const darkTheme = {
  dark: true,
  colors: {
    primary: colors.pale_violet.base,
    secondary: colors.light_gray.base,
    background: colors.dark_charcoal.base,
    'dark-lavender': colors.dark_lavender.base
  }
}

const lightTheme = {
  dark: false,
  colors: {
    primary: colors.pale_violet.darken1,
    secondary: colors.dark_charcoal.base,
    background: colors.light_gray.base,
    'dark-lavender': colors.dark_lavender.base
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases: {
        ...aliasesFa,
        ...aliasesMdi
      },
      sets: {
        fa,
        mdi
      }
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: darkTheme,
        light: lightTheme
      }
    }
  })

  app.vueApp.component('font-awesome-icon', FontAwesomeIcon)
  app.vueApp.use(vuetify)
})

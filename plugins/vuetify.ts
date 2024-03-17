// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import colors from '../public/colors';

const darkTheme = {
  dark: true,
  colors: {
    primary: colors.pale_violet.base,
    secondary: colors.light_gray.base,
    background: colors.dark_charcoal.base,
  }
};

const lightTheme = {
  dark: false,
  colors: {
    primary: colors.pale_violet.base,
    secondary: colors.dark_charcoal.base,
    background: colors.light_gray.base,
  }
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        dark: darkTheme,
        light: lightTheme
      }
    },
  })

  app.vueApp.use(vuetify)
});

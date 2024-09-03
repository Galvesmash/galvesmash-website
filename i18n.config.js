import lang from '../lang/lang.js'

export default defineI18nConfig(() => ({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  legacy: false,
  messages: lang
}))
export default defineI18nConfig(() => ({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  legacy: false,
  messages: {
    en: {
      general: {
        galvesmash: 'Galvesmash'
      }
    },
    'pt-br': {
      general: {
        galvesmash: 'Galvesmash'
      }
    }
  }
}))
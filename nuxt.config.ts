import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true
          })
        )
      })
    },
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

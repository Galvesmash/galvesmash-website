import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      'vuetify'
    ],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
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
    vueI18n: './i18n.config.js',
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },

  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
    // @ts-ignore
    ssr: {
      noExternal: ["moment"]
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

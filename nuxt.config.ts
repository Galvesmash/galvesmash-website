import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/galvesmash-website/" : "/",
    buildAssetsDir: 'assets'
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      'vuetify'
    ],
  },

  i18n: {
    vueI18n: './i18n.config.js',
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },

  modules: [
    (_options: any, nuxt: any) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
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

  runtimeConfig: {
    public: {
      cvLink: process.env.VUE_APP_CV_LINK,
      emailjs: {
        publicKey: process.env.VUE_APP_EMAILJS_PUBLIC_KEY,
        serviceKey: process.env.VUE_APP_EMAILJS_SERVICE,
        templateKey: process.env.VUE_APP_EMAILJS_TEMPLATE
      },
      version: process.env.VUE_APP_VERSION,
    }
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

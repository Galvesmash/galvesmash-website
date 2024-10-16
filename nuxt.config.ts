import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

process.env.VUE_APP_VERSION = require('./package.json').version

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === "production" && !process.env.VUE_APP_DOMAIN ? "/galvesmash-website/" : "/"
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      'vuetify'
    ],
  },

  i18n: {
    strategy: 'no_prefix',
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
    '@zadigetvoltaire/nuxt-gtm',
    'nuxt-gtag',
  ],

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.VUE_APP_GA_ID || ''
  },

  gtm: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.VUE_APP_GTM_ID || ''
  },

  runtimeConfig: {
    public: {
      cvLink: process.env.VUE_APP_CV_LINK,
      email: process.env.VUE_APP_EMAIL,
      emailjs: {
        publicKey: process.env.VUE_APP_EMAILJS_PUBLIC_KEY,
        serviceKey: process.env.VUE_APP_EMAILJS_SERVICE,
        templateKey: process.env.VUE_APP_EMAILJS_TEMPLATE
      },
      googleAnalyticsId: process.env.VUE_APP_GA_ID,
      imagesPath: process.env.NODE_ENV === "production" && !process.env.VUE_APP_DOMAIN ? "/galvesmash-website/" : "/",
      nodeEnv: process.env.NODE_ENV,
      phone: process.env.VUE_APP_PHONE,
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

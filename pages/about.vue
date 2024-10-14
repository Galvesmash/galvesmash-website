<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useThemeStore } from '~/store'

  definePageMeta({
    layout: 'default',
    name: 'about'
  })

  const { t, locale } = useI18n()
  const config = useRuntimeConfig()

  const gaObject = config.public.nodeEnv === 'production'
    ? {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`,
        async: true,
      }
    : {}

  useHead({
    htmlAttrs: { lang: `${locale.value}` },
    link: [{ rel: 'canonical', href: 'https://galvesmash.com/about' }],
    script: [ gaObject ]
  })

  useSeoMeta({
    title: t('about.seo.title'),
    ogTitle: t('about.seo.title'),
    description: t('about.seo.description'),
    ogDescription: t('about.seo.description'),
    ogImage: `https://galvesmash.com${config.public.imagesPath}images/me.png`
  })

  const themeStore = useThemeStore()

  const coverImage = computed(() => `${config.public.imagesPath}images/me.png`)
  const lazyImage = computed(() => `${config.public.imagesPath}images/lazy-me.png`)

  themeStore.setCurrentLayout('default')

  onMounted(() => {
    window.dataLayer = window?.dataLayer || []

    if (config.public.nodeEnv === 'production') {
      window.dataLayer.push('js', new Date())
      window.dataLayer.push('config', config.public.googleAnalyticsId)
    }
  })
</script>

<template>
  <section class="py-8 py-md-12">
    <v-row class="ma-0 no-user-select">
      <v-col class="mb-8 mb-md-6 pa-0" sm="12" md="4" cols="12">
        <v-img
          :alt="t('general.imageAlt')"
          :lazy-src="lazyImage"
          :src="coverImage"
          :style="{ filter: 'contrast(0.8)' }"
          aspect-ratio="1"
          class="mx-auto mx-md-0"
          cover
          max-height="400px"
          max-width="400px"
          rounded="lg"
          width="100%"
        />
      </v-col>

      <v-col class="mb-2 mb-md-6 pa-0 pl-md-12" sm="12" md="8" cols="12">
        <h1 class="mb-6 font-italic font-weight-bold no-user-select text-h4 text-primary text-uppercase">{{ t('about.aboutMe.title') }}!</h1>

        <about-me />
      </v-col>

      <v-col class="mt-10 mt-md-16 pa-0" cols="12">
        <h2 class="mb-6 font-italic font-weight-bold no-user-select text-md-center text-h4 text-primary text-uppercase">{{ t('about.skills.title') }}</h2>

        <skill-list />
      </v-col>

      <v-col class="mb-2 mb-md-6 mt-10 mt-md-16 pa-0" cols="12">
        <h2 class="mb-6 font-italic font-weight-bold no-user-select text-md-center text-h4 text-primary text-uppercase">{{ t('about.experience.title') }}</h2>

        <experience-list />
      </v-col>

      <v-col class="mt-10 mt-md-16 pa-0" cols="12">
        <contact-me />
      </v-col>
    </v-row>
  </section>
</template>

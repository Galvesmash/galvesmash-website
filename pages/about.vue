<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useThemeStore } from '~/store'

  definePageMeta({
    layout: 'default'
  })

  const { t } = useI18n()
  const config = useRuntimeConfig()
  const themeStore = useThemeStore()

  const coverImage = computed(() => `${config.public.imagesPath}images/me.png`)
  const lazyImage = computed(() => `${config.public.imagesPath}images/lazy-me.png`)

  themeStore.setCurrentLayout('default')
</script>

<template>
  <section class="py-8 py-md-12">
    <v-row class="ma-0">
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
        <h2 class="mb-6 font-italic font-weight-bold no-user-select text-h4 text-primary text-uppercase">{{ t('about.aboutMe.title') }}!</h2>

        <about-me />
      </v-col>

      <v-col class="mt-10 mt-md-16 pa-0" cols="12">
        <h3 class="mb-6 font-italic font-weight-bold no-user-select text-md-center text-h4 text-primary text-uppercase">{{ t('about.skills.title') }}</h3>

        <skill-list />
      </v-col>

      <v-col class="mb-2 mb-md-6 mt-10 mt-md-16 pa-0" cols="12">
        <h3 class="mb-6 font-italic font-weight-bold no-user-select text-md-center text-h4 text-primary text-uppercase">{{ t('about.experience.title') }}</h3>

        <experience-list />
      </v-col>

      <v-col class="mt-10 mt-md-16 pa-0" cols="12">
        <contact-me />
      </v-col>
    </v-row>
  </section>
</template>

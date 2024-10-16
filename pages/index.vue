<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { defineAsyncComponent } from 'vue'
  import { useGeneralStore, useProjectStore, useThemeStore } from '~/store'

  const ProjectCard = defineAsyncComponent(() => import('~/components/ProjectCard'))
  const ProjectCardDesktop = defineAsyncComponent(() => import('~/components/ProjectCardDesktop'))
  const ContactMe = defineAsyncComponent(() => import('~/components/ContactMe'))

  definePageMeta({
    layout: 'default',
    name: 'galvesmash'
  })
  
  const { t, locale } = useI18n()
  const config = useRuntimeConfig()
  const router = useRouter()

  useHead({
    htmlAttrs: { lang: `${locale.value}` },
    link: [{ rel: 'canonical', href: 'https://galvesmash.com' }],
    script: [{
      src: `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`,
      async: true,
    }]
  })

  useSeoMeta({
    title: t('general.seo.title'),
    ogTitle: t('general.seo.title'),
    description: t('general.seo.description'),
    ogDescription: t('general.seo.description'),
    ogImage: `https://galvesmash.com${config.public.imagesPath}images/me-small.webp`
  })

  const generalStore = useGeneralStore()
  const projectStore = useProjectStore()
  const themeStore = useThemeStore()
  const { isMobileView } = storeToRefs(generalStore)
  const { projectList } = storeToRefs(projectStore)

  themeStore.setCurrentLayout('default')

  function changeRoute(route: string = 'project') {
    if (route === 'project') {
      // TODO: Finish project page
      return
    }

    router.push({ path: `/${route}` })
  }

  const coverImage = computed(() => `${config.public.imagesPath}images/me-small.webp`)
  const lazyImage = computed(() => `${config.public.imagesPath}images/lazy-me-small.webp`)
  const mdCols = computed(() => {
    if (projectList.value.length >= 3) return '4'

    return projectList.value.length >= 2 ? '6' : '12'
  })

  onMounted(() => {
    window.dataLayer = window?.dataLayer || []

    if (config.public.nodeEnv === 'production') {
      window.dataLayer.push('js', new Date())
      window.dataLayer.push('config', config.public.googleAnalyticsId)
    }

    projectStore.setProjectList([
      {
        cover: 'cover-breathe.webp',
        href: 'https://galvesmash.itch.io/breathe',
        subtitle: 'Unity3D',
        title: 'Breathe'
      },
      {
        cover: 'cover-galvesmash-website.webp',
        href: 'https://github.com/Galvesmash/galvesmash-website?tab=readme-ov-file#galvesmash-website',
        subtitle: 'Vue.js',
        title: 'Galvesmash Website'
      },
      {
        cover: 'cover-fortune-machine.webp',
        href: 'https://github.com/Galvesmash/fortune-machine?tab=readme-ov-file#fortune-machine',
        subtitle: 'Vue.js',
        title: 'Fortune Machine'
      },
      {
        cover: 'cover-fortune-teller.webp',
        href: 'https://github.com/Galvesmash/fortune-teller-game?tab=readme-ov-file#fortune-teller-game',
        subtitle: 'Vue.js',
        title: 'Fortune Teller'
      }
    ])
  })
</script>

<template>
  <section class="py-10 py-md-16">
    <v-row class="ma-0">
      <v-col class="d-flex justify-md-end pa-0 pr-md-16" cols="12" md="5">
        <v-img
          :alt="t('general.presentation.imageAlt')"
          :lazy-src="lazyImage"
          :max-height="isMobileView ? 160 : 224"
          :max-width="isMobileView ? 160 : 224"
          :src="coverImage"
          :style="{ filter: 'contrast(0.8)' }"
          aspect-ratio="1"
          class="mx-auto mx-md-0"
          format="webp"
          height="100%"
          rounded="circle"
          width="100%"
        />
      </v-col>

      <v-col class="mt-10 mt-md-0 pa-0" cols="12" md="7">
        <h2 class="font-italic font-weight-thin mb-2 no-user-select text-capitalize text-center text-h5 text-md-h3 text-md-start text-secondary">
          {{ t('general.presentation.name') }}
        </h2>
        
        <h1 class="font-italic mb-6 mb-md-10 no-user-select text-center text-h4 text-md-h2 text-md-start text-secondary">
          <strong class="font-weight-bold text-capitalize">{{ t('general.headline.frontendDeveloper') }}</strong>
        </h1>

        <h2
          :style="{ whiteSpace: 'pre-line' }"
          class="text-center font-italic no-user-select text-body-1 text-md-h6 text-md-start text-secondary"
        >
          {{ t('general.presentation.title') }}
        </h2>

        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            class="d-flex font-italic mx-auto mt-2 mx-md-0 opacity-100 pa-0 text-decoration-underline text-none"
            variant="plain"
            @click="changeRoute('about')"
          >
            {{ t('general.presentation.button') }}

            <v-icon
              :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
              :style="{ transition: 'all .3s' }"
              class="ml-2"
              icon="fa-solid fa-arrow-right-long"
              size="11"
            />
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="ma-0 no-user-select pt-10 pt-md-16">
      <v-col class="pa-0 mb-6 mb-md-12" cols="12">
        <p class="font-italic no-user-select text-center text-h6 text-md-h3 text-secondary">
          {{ t('general.someProjectsWorked') }}:
        </p>
      </v-col>
      <v-col
        v-for="(project, index) in projectList"
        :key="index"
        :md="mdCols"
        class="pb-2 pt-0 px-1"
        cols="12"
        sm="12"
      >
        <component
          :is="isMobileView ? ProjectCard : ProjectCardDesktop"
          :cover="project.cover"
          :href="project.href"
          :subtitle="project.subtitle"
          :title="project.title"
          @handle-interaction="changeRoute()"
        />
      </v-col>
    </v-row>

    <v-row class="ma-0 pt-10 pt-md-16">
      <v-col class="pa-0" cols="12">
        <ContactMe />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useProjectStore } from '~/store'
  import { useThemeStore } from '~/store'

  definePageMeta({
    layout: 'default'
  })

  const { t } = useI18n()
  const router = useRouter()
  const projectStore = useProjectStore()
  const themeStore = useThemeStore()
  const { projectList } = storeToRefs(projectStore)

  themeStore.setCurrentLayout('default')

  function redirectToRoute(route: string = 'project') {
    router.push({ path: `/${route}` })
  }

  const coverImage = computed(() => '_nuxt/assets/images/me-small.png')
  const lazyImage = computed(() => '_nuxt/assets/images/lazy-me-small.png')
  const smCols = computed(() => projectList.value.length >=2 ? '6' : '12')
  const mdCols = computed(() => {
    if (projectList.value.length >=3) return '4'

    return projectList.value.length >=2 ? '6' : '12'
  })

  onMounted(() => {
    projectStore.setProjectList([
      {
        title: 'Breathe',
        subtitle: 'Unity3D',
        cover: 'cover-breathe.png'
      },
      {
        title: 'Fortune Machine',
        subtitle: 'Vue.js',
        cover: 'cover-fortune-machine.png'
      },
      {
        title: 'Fortune Teller',
        subtitle: 'Vue.js',
        cover: 'cover-fortune-teller.png'
      }
    ])
  })
</script>

<template>
  <section class="py-10 py-md-16">
    <v-row class="ma-0">
      <v-col class="d-flex justify-md-end pa-0 pr-md-16" cols="12" md="5">
        <v-img
          :lazy-src="lazyImage"
          :src="coverImage"
          :style="{ filter: 'contrast(0.8)' }"
          alt="Foto de Gabriel Galves Taliatti"
          aspect-ratio="1"
          class="mx-auto mx-md-0"
          height="100%"
          max-height="220px"
          max-width="220px"
          rounded="circle"
          width="100%"
        />
      </v-col>

      <v-col class="mt-10 mt-md-0 pa-0" cols="12" md="7">
        <h2
          class="font-italic font-weight-thin mb-2 text-capitalize text-center text-h5 text-md-h3 text-md-start text-secondary"
        >
          {{ t('general.presentation.name') }}
        </h2>
        
        <h2
          class="font-italic mb-6 mb-md-10 text-center text-h4 text-md-h2 text-md-start text-secondary"
        >
          <strong class="font-weight-bold text-capitalize">{{ t('general.headline.frontendDeveloper') }}</strong>
        </h2>

        <h1
          :style="{ whiteSpace: 'pre-line' }"
          class="text-center font-italic text-body-1 text-md-h6 text-md-start text-secondary"
        >
          {{ t('general.presentation.title') }}
        </h1>
      </v-col>
    </v-row>

    <v-row class="ma-0 pt-10 pt-md-16">
      <v-col class="pa-0 mb-6 mb-md-12" cols="12">
        <p class="font-italic text-center text-h6 text-md-h3 text-secondary">{{ t('general.someProjectsWorked') }}:</p>
      </v-col>
      <v-col
        v-for="(project, index) in projectList"
        :key="index"
        :md="mdCols"
        :sm="smCols"
        class="pb-2 pt-0 px-1"
        cols="12"
      >
        <project-card
          :cover="project.cover"
          :subtitle="project.subtitle"
          :title="project.title"
          @handle-interaction="redirectToRoute()"
        />
      </v-col>
    </v-row>
  </section>
</template>

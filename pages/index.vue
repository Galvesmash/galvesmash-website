<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { useProjectStore } from '~/store'

  definePageMeta({
    layout: 'default'
  })

  const { t } = useI18n();
  const router = useRouter()
  const projectStore = useProjectStore()
  const { projectList } = storeToRefs(projectStore)

  function redirectToRoute(route: string = 'project') {
    router.push({ path: `/${route}` })
  }

  const smCols = computed(() => projectList.value.length >=2 ? '6' : '12')
  const mdCols = computed(() => {
    if (projectList.value.length >=3) return '4'

    return projectList.value.length >=2 ? '6' : '12'
  })

  onMounted(() => {
    projectStore.setProjectList([
      {
        title: 'Breathe',
        subtitle: 'Unity3D Game',
        cover: 'cover-breathe.png'
      }
    ])
  })
</script>

<template>
  <section class="pt-8 pt-md-12">
    <v-row class="mb-10 mb-md-16 mt-0 mx-0">
      <v-col class="pa-0" cols="12">
        <h2 class="mb-2 text-capitalize text-h5 text-md-h4 text-secondary">{{ t('general.presentation.title') }}</h2>

        <h2 class="font-weight-bold mb-6 text-capitalize text-h4 text-md-h3 text-secondary">{{ t('general.headline.frontendDeveloper') }}</h2>

        <h1 class="text-body-1 text-md-h6 text-secondary">{{ t('general.presentation.subtitle') }}</h1>
      </v-col>
    </v-row>

    <v-row class="ma-0">
      <v-col
        v-for="(project, index) in projectList"
        :key="index"
        :md="mdCols"
        :sm="smCols"
        class="pa-0"
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

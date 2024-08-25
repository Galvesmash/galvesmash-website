<script setup lang="ts">
  import { useProjectStore } from '~/store'

  definePageMeta({
    layout: 'default'
  })

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
        cover: 'breathe-cover.png'
      }
    ])
  })
</script>

<template>
  <section>
    <h1 class="text-secondary">Index page</h1>

    <v-row>
      <v-col
        v-for="(project, index) in projectList"
        :key="index"
        :md="mdCols"
        :sm="smCols"
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

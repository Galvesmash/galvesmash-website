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

  onMounted(() => {
    projectStore.setProjectList([])
  })
</script>

<template>
  <section>
    <h1 class="text-secondary">Index page</h1>

    <v-row>
      <v-col
        v-for="(project, index) in 10"
        :index="index"
        cols="12"
        sm="6"
        md="4"
      >
        <project-card
          @handle-interaction="redirectToRoute()"
        />
      </v-col>
    </v-row>
  </section>
</template>

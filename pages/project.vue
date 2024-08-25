<script setup lang="ts">
  import { useProjectStore } from '~/store'

  definePageMeta({
    layout: 'default'
  })

  const projectStore = useProjectStore()
  const { selectedProject } = storeToRefs(projectStore)
</script>

<template>
  <section>
    <h1 class="text-secondary">Project page</h1>
    <h2 class="text-secondary">{{ selectedProject }}</h2>
  </section>
</template>

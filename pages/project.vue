<script setup lang="ts">
  import { useProjectStore } from '~/store'
  import { useThemeStore } from '~/store'

  definePageMeta({
    layout: 'soon'
  })

  const projectStore = useProjectStore()
  const themeStore = useThemeStore()
  // const { selectedProject } = storeToRefs(projectStore)

  themeStore.setCurrentLayout('soon')

</script>

<template>
  <section>
    <!-- <h2 class="text-secondary">{{ selectedProject }}</h2> -->

    <soon-content />
  </section>
</template>

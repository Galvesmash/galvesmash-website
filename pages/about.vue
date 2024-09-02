<script setup lang="ts">
  import { useThemeStore } from '~/store'
    
  definePageMeta({
    layout: 'soon'
  })
  
  const themeStore = useThemeStore()

  themeStore.setCurrentLayout('soon')
</script>

<template>
  <section>
    <soon-content />
  </section>
</template>

<template>
  <NuxtLayout
    :name="layout"
  >
    <v-app
      :theme="theme.global.name.value"
    >
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'
  
  const theme = useTheme()
  const themeStore = useThemeStore()
  const { isMobileView } = storeToRefs(themeStore)
  const setIsMobileView = themeStore.setIsMobileView

  const layout = 'default'

  function onResize () {
    let newMobileViewValue = window.innerWidth <= 960

    if (isMobileView === newMobileViewValue) return

    setIsMobileView(newMobileViewValue)
  }

  onMounted(() => {
    onResize()

    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
</script>

<style>
.v-application__wrap {
  min-height: calc(100dvh - 203px) !important;

  @media screen and (max-width: 960px) {
    min-height: calc(100dvh - 60px) !important;
  }
}
</style>
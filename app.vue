<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore, useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'
  
  const theme = useTheme()
  const generalStore = useGeneralStore()
  const themeStore = useThemeStore()
  const { t } = useI18n()
  const { isMobileView } = storeToRefs(generalStore)
  const { currentLayout, currentTheme } = storeToRefs(themeStore)
  
  themeStore.setCurrentLayout('default')
  themeStore.setCurrentTheme(theme.global.name.value)

  function onResize () {
    let newMobileViewValue = window.innerWidth <= 960

    if (isMobileView.value === newMobileViewValue) return

    generalStore.setIsMobileView(newMobileViewValue)
  }

  onMounted(() => {
    onResize()

    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
</script>

<template>
  <NuxtLayout
    :name="currentLayout"
  >
    <v-app
      :class="`v-layout--${currentLayout}`"
      :theme="currentTheme"
    >
      <side-menu />

      <v-container class="px-5 px-md-16 py-0" max-width="1440">
        <NuxtPage />
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<style lang="scss">
  .text-headline {
    font-size: 12px !important;
    font-weight: 100 !important;
    letter-spacing: 11px !important;
    line-height: 10px !important;

    &-footer {
      font-size: 10px !important;
      font-weight: 400 !important;
      letter-spacing: 1.67px !important;
      line-height: 16px !important;
    }

    &-small {
      font-size: 10px !important;
      font-weight: 100 !important;
      letter-spacing: 9px !important;
      line-height: 10px !important;
    }

    &-subtitle {
      font-size: 16px !important;
      font-weight: 500 !important;
      letter-spacing: 4px !important;
      line-height: 18px !important;
    }

    &-title {
      font-size: 26px !important;
      font-weight: 700 !important;
      letter-spacing: 9px !important;
      line-height: 28px !important;
    }
  }

  .z-index {
    &-10 {  z-index: 10; }
    &-20 {  z-index: 20; }
    &-50 {  z-index: 50; }
    &-100 {  z-index: 100; }
  }

  .filter-blur {
    &-1 {  filter: blur(1px); }
    &-2 {  filter: blur(2px); }
    &-5 {  filter: blur(5px); }
    &-10 {  filter: blur(10px); }
  }
</style>

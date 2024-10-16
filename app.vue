<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { defineAsyncComponent } from 'vue'
  import { useGeneralStore, useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'

  declare global {
    interface Window {
      dataLayer: any
    }
  }

  const SideMenu = defineAsyncComponent(() => import('~/components/SideMenu'))

  const theme = useTheme()
  const generalStore = useGeneralStore()
  const themeStore = useThemeStore()
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
  <nuxt-layout :name="currentLayout">
    <v-app
      :class="[ { 'pt-md-app': !isMobileView }, `pt-16 v-layout--${currentLayout}`]"
      :theme="currentTheme"
    >
      <SideMenu />

      <v-container class="px-5 px-md-16 py-0" max-width="1440">
        <nuxt-page />
      </v-container>
    </v-app>
  </nuxt-layout>
</template>

<style lang="scss">
  .filter-blur {
    &-1 {  filter: blur(1px); }
    &-2 {  filter: blur(2px); }
    &-5 {  filter: blur(5px); }
    &-10 {  filter: blur(10px); }
  }

  .text-headline {
    font-size: 12px !important;
    font-weight: 100;
    letter-spacing: 11px !important;
    line-height: 10px !important;

    &-footer {
      font-size: 10px !important;
      font-weight: 400;
      letter-spacing: 1.67px !important;
      line-height: 16px !important;
    }

    &-general {
      font-size: 15px !important;
      font-weight: 300;
      letter-spacing: 2px !important;
      line-height: 18px !important;
    }

    &-small {
      font-size: 10px !important;
      font-weight: 100;
      letter-spacing: 9px !important;
      line-height: 10px !important;
    }

    &-subtitle {
      font-size: 16px !important;
      font-weight: 500;
      letter-spacing: 4px !important;
      line-height: 18px !important;
    }

    &-title {
      font-size: 26px !important;
      font-weight: 700;
      letter-spacing: 9px !important;
      line-height: 28px !important;
    }
  }

  .no-letter-spacing {
    letter-spacing: normal !important;
  }

  .no-user-select {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .pt-md-app {
    padding-top: 203px !important;
  }

  .text-pre-wrap {
    white-space: pre-wrap !important;
  }

  .v-field-label {
    text-transform: uppercase;
    font-size: 14px !important;
    font-style: italic;
    letter-spacing: 8.4px !important;

    &--floating {
      font-size: 10.4px !important;
      letter-spacing: 6.6px !important;
    }
  }

  .v-input__details {
    padding-bottom: 4px !important;
    padding-top: 2px !important;
    text-align: left;
  }

  .v-navigation-drawer__scrim {
    position: fixed;
  }

  .z-index {
    &-10 {  z-index: 10; }
    &-20 {  z-index: 20; }
    &-50 {  z-index: 50; }
    &-100 {  z-index: 100; }
  }
</style>

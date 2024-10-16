<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  const AppHeader = defineAsyncComponent(() => import('~/components/AppHeader'))
  const AppFooter = defineAsyncComponent(() => import('~/components/AppFooter'))
</script>

<template>
  <div>
    <AppHeader />
    
    <slot />

    <AppFooter />
  </div>
</template>

<style lang="scss">
  $footerHeightDesktop: 212px;
  $footerHeightMobile: 140px;
  $headerHeightDesktop: 203px;
  $headerHeightMobile: 60px;

  .v-layout {
    &--default {
      .v-application {
        &__wrap {
          min-height: calc(100dvh - $headerHeightDesktop - $footerHeightDesktop) !important;
        
          @media screen and (max-width: 960px) {
            min-height: calc(100dvh - $headerHeightMobile - $footerHeightMobile) !important;
          }
        }
      }
    }
  }
</style>

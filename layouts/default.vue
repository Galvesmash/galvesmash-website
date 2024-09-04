<template>
  <div>
    <app-header />
    
    <slot />

    <app-footer />
  </div>
</template>

<style lang="scss">
  $footerHeightDesktop: 212px;
  $footerHeightMobile: 120px;
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

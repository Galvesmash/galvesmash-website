<template>
  <div>
    <app-header />
    
    <slot />
  </div>
</template>

<style lang="scss">
  .v-layout {
    &--default {
      .v-application {
        &__wrap {
          min-height: calc(100dvh - 203px) !important;
        
          @media screen and (max-width: 960px) {
            min-height: calc(100dvh - 60px) !important;
          }
        }
      }
    }
  }
</style>

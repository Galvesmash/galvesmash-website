<template>
  <div>    
    <slot />
  </div>
</template>

<style lang="scss">
  .v-layout {
    &--soon {
      .v-application {
        &__wrap {
          justify-content: center;
        }
      }
    }
  }
</style>
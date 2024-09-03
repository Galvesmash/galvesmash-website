<script setup lang="ts">
  import { useGeneralStore } from '~/store'
  
  const emit = defineEmits(['handle-interaction'])
  const generalStore = useGeneralStore()
  const { isMobileView } = storeToRefs(generalStore)

  function handleInteraction() {
    emit('handle-interaction')
  }
</script>

<template>
  <section class="align-center d-flex flex-column position-relative py-1 py-md-0">
    <slot name="before"></slot>

    <galvesmash-logo
      color="secondary"
      :height="isMobileView ? '52' : '101'"
      :width="isMobileView ? '140' : '368'"
      @click="handleInteraction"
    />

    <slot name="after"></slot>
  </section>
</template>

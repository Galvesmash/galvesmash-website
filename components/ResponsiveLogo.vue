<script setup lang="ts">
  interface Props {
    height?: string
    width?: string
  }
  
  const emit = defineEmits(['handle-interaction'])

  const props = withDefaults(defineProps<Props>(), {
    height: '52',
    width: '140'
  })

  function handleInteraction() {
    emit('handle-interaction')
  }
</script>

<template>
  <section class="align-center d-flex flex-column position-relative py-1 py-md-0">
    <slot name="before"></slot>

    <galvesmash-logo
      color="secondary"
      :height="props.height"
      :style="{ transition: 'all .3s' }"
      :width="props.width"
      @click="handleInteraction"
    />

    <slot name="after"></slot>
  </section>
</template>

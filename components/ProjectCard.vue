<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      color="primary"
      class="mx-auto"
      height="300"
      link
      max-width="380"
    >
      <v-img
        :class="{ 'opacity-50': isHovering }"
        :style="{ transition: 'all .3s' }"
        src="https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg"
        cover
        height="100%"
        width="100%"
      />
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
</script>

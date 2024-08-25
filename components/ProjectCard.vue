<script setup lang="ts">
  import { useProjectStore } from '~/store'

  const emit = defineEmits(['handle-interaction'])
  const projectStore = useProjectStore()

  interface Props {
    image?: string
    subtitle?: string
    title?: string
  }

  const propsData = withDefaults(defineProps<Props>(), {
    image: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
    subtitle: 'Subtitle',
    title: 'Title'
  })

  function cardInteraction() {
    projectStore.setSelectedProject(propsData.title)

    emit('handle-interaction')
  }
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      class="mx-auto"
      color="dark-lavender"
      height="300"
      link
      max-width="380"
      @click="cardInteraction"
    >
      <v-img
        :class="{ 'opacity-30 filter-blur-5 z-index-10' : isHovering }"
        :src="propsData.image"
        :style="{ transition: 'all .3s' }"
        class="position-absolute top-0"
        cover
        height="100%"
        width="100%"
      />

      <v-card-item
        :class="{ 'opacity-100 z-index-20' : isHovering }"
        :style="{ transition: 'all .3s' }"
        class="h-100 justify-center opacity-0 position-relative"
      >
        <v-card-title class="text-headline-title text-secondary">
          {{ propsData.title }}
        </v-card-title>

        <v-card-subtitle class="text-headline-subtitle text-primary">
          {{ propsData.subtitle }}
        </v-card-subtitle>
      </v-card-item>
    </v-card>
  </v-hover>
</template>

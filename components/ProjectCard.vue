<script setup lang="ts">
  import { useProjectStore } from '~/store'
  import type { ProjectObject } from '~/types'

  const emit = defineEmits(['handle-interaction'])
  const projectStore = useProjectStore()

  const propsData = defineProps<ProjectObject>()

  const coverImage = computed(() => `_nuxt/assets/images/${propsData.cover}`)
  const lazyImage = computed(() => `_nuxt/assets/images/lazy-${propsData.cover}`)

  function handleInteraction() {
    projectStore.setSelectedProject(propsData.title)

    emit('handle-interaction')
  }
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :href="propsData.href"
      :style="{ boxShadow: '0 0 2px black' }"
      class="mx-auto"
      color="dark-lavender"
      height="300"
      link
      max-width="380"
      rounded="lg"
      target="_blank"
      @click="handleInteraction"
    >
      <v-img
        :class="{ 'opacity-30 filter-blur-5 z-index-10' : isHovering }"
        :lazy-src="lazyImage"
        :src="coverImage"
        :style="{ transition: 'all .3s' }"
        class="position-absolute top-0"
        cover
        height="100%"
        width="100%"
      />

      <v-card-item
        :class="{ 'opacity-100 z-index-20' : isHovering }"
        :style="{ transition: 'all .3s' }"
        class="h-100 justify-center opacity-0 position-relative text-center"
      >
        <v-card-title class="mb-3 text-headline-title text-grey-lighten-4">
          {{ propsData.title }}
        </v-card-title>

        <v-card-subtitle class="font-weight-bold text-headline-subtitle text-primary" :style="{ textShadow: '0 0 6px black' }">
          {{ propsData.subtitle }}
        </v-card-subtitle>
      </v-card-item>
    </v-card>
  </v-hover>
</template>

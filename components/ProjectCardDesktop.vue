<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useProjectStore } from '~/store'
  import type { ProjectObject } from '~/types'

  const { t } = useI18n()
  const config = useRuntimeConfig()

  const emit = defineEmits(['handle-interaction'])
  const projectStore = useProjectStore()

  const propsData = defineProps<ProjectObject>()

  const coverImage = computed(() => `${config.public.imagesPath}images/${propsData.cover}`)
  const lazyImage = computed(() => `${config.public.imagesPath}images/lazy-${propsData.cover}`)

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
      @click="handleInteraction"
      class="mx-auto"
      color="dark-lavender"
      height="300"
      link
      max-width="380"
      rounded="lg"
      target="_blank"
    >
      <v-img
        :alt="t('general.projects.imageAlt')"
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
        <v-card-title class="mb-3 font-italic font-weight-bold no-user-select text-headline-title text-grey-lighten-4 text-pre-wrap text-uppercase">
          {{ propsData.title }}
        </v-card-title>

        <v-card-subtitle class="font-italic font-weight-bold no-user-select text-headline-subtitle text-primary text-uppercase" :style="{ textShadow: '0 0 6px black' }">
          {{ propsData.subtitle }}
        </v-card-subtitle>
      </v-card-item>
    </v-card>
  </v-hover>
</template>

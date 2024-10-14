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
  <v-card
    :style="{ boxShadow: '0 0 2px black' }"
    class="mx-auto"
    color="background"
    height="160"
    rounded="lg"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-container class="d-flex flex-column ma-0" max-width="calc(100% - 160px)">
        <v-card-title class="mb-3 font-italic font-weight-bold no-user-select pa-0 text-headline-subtitle text-pre-wrap text-secondary">
          {{ propsData.title }}
        </v-card-title>

        <v-card-subtitle class="font-italic font-weight-bold no-user-select opacity-100 pa-0 text-headline-subtitle text-primary">
          {{ propsData.subtitle }}
        </v-card-subtitle>

        <v-card-actions class="align-end flex-grow-1 pa-0">
          <v-btn
            :href="propsData.href"
            @click="handleInteraction"
            class="font-italic font-weight-bold w-100"
            color="primary"
            height="32"
            target="_blank"
            variant="outlined"
          >
            {{ t('general.projects.learnMore') }}

            <v-icon class="ml-2" color="primary" icon="fa-solid fa-up-right-from-square" size="11" />
          </v-btn>
        </v-card-actions>
      </v-container>

      <v-avatar
        :style="{ boxShadow: '0 0 2px black' }"
        border="none"
        class="pa-0"
        rounded="0"
        size="160"
      >
        <v-img
          :alt="t('general.projects.imageAlt')"
          :lazy-src="lazyImage"
          :src="coverImage"
          cover
        />
      </v-avatar>
    </div>
  </v-card>
</template>

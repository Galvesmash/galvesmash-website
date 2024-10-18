<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import type { ModalTemplate } from '~/types'

  const { t } = useI18n()
  const generalStore = useGeneralStore()
  const { isMobileView } = storeToRefs(generalStore)
  const emit = defineEmits(['handle-close'])

  const props = withDefaults(defineProps<ModalTemplate>(), {
    backgroundColor: 'background',
    color: 'secondary',
    dialog: false,
    maxWidth: 540
  })
</script>

<template>
  <v-dialog v-model="props.dialog" width="auto">
    <v-card
      :color="props.backgroundColor"
      :max-width="props.maxWidth"
      :prepend-icon="props.prependIcon || ''"
      class="pt-5 px-5"
    >
      <v-card-title :class="`mb-5 text-${props.color}`" class="font-italic font-weight-bold no-letter-spacing no-user-select pa-0 text-headline-subtitle">
        {{ props.title }}
      </v-card-title>

      <v-card-text :class="`text-${props.color}`" class="font-italic mb-1 no-letter-spacing no-user-select pa-0 text-headline-subtitle text-secondary">
        {{ props.text }}
      </v-card-text>

      <v-card-actions class="justify-center pa-0">
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
            :text="'Ok'"
            class="font-italic opacity-100"
            height="40"
            variant="plain"
            @click="emit('handle-close')"
          />
        </v-hover>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

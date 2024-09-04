<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
  const generalStore = useGeneralStore()
  const { isMobileView } = storeToRefs(generalStore)
</script>

<template>
  <v-footer
    :height="isMobileView ? 120 : 212"
    class="pa-5"
    color="background"
  >
    <v-container class="pa-0" max-width="1440">
      <v-container class="pa-0" max-width="500">
        <social-media-buttons class="mb-5"/>
      </v-container>
    </v-container>
  </v-footer>
</template>

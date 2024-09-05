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

        <p class="text-center text-headline-footer text-secondary">
          {{ t('general.footer.copyright') }}.
          <br />
          {{ t('general.footer.madeBy') }}.
          <br />
          {{ t('general.footer.designedBy') }}
          <v-hover v-slot="{ isHovering, props }">
            <v-btn
              v-bind="props"
              :color="isHovering ? 'primary' : 'secondary'"
              :style="{ transition: 'all .3s' }"
              class="mb-1 opacity-100 pa-0 text-capitalize text-headline-footer"
              density="compact"
              height="13px"
              href="https://www.ttarmann.com"
              slim
              target="_blank"
              variant="plain"
            >
              {{ t('general.footer.tarmann') }}
            </v-btn>
          </v-hover>.
        </p>
      </v-container>
    </v-container>
  </v-footer>
</template>

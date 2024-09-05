<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
  const router = useRouter()
  const generalStore = useGeneralStore()
  const { drawerMenu } = storeToRefs(generalStore)

  function changeRoute (page = '') {
    router.push(`/${page}`)
  }
</script>

<template>
  <v-navigation-drawer
    v-model="drawerMenu"
    temporary
    width="300"
  >
    <div class="mb-6 mt-2 pl-5 pr-2">
      <galvesmash-logo
        color="secondary"
        height="52"
        width="140"
      />

      <h2 class="font-italic text-headline text-secondary text-uppercase w-100">
        {{ t('general.headline.gameDeveloper') }}
      </h2>
    </div>

    <v-divider />

    <div class="d-flex flex-column">
      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          v-bind="props"
          :color="isHovering ? 'primary' : 'secondary'"
          :style="{ transition: 'all .3s' }"
          class="font-italic justify-start text-headline-subtitle"
          variant="text"
          @click="changeRoute('about')"
        >
          {{ t('general.menu.about') }}
        </v-btn>
      </v-hover>

      <v-hover v-slot="{ isHovering, props }">
        <v-btn
          v-bind="props"
          :color="isHovering ? 'primary' : 'secondary'"
          :style="{ transition: 'all .3s' }"
          class="font-italic justify-start text-headline-subtitle"
          variant="text"
          @click="changeRoute('contact')"
        >
          {{ t('general.menu.contact') }}
        </v-btn>
      </v-hover>
    </div>
  </v-navigation-drawer>
</template>

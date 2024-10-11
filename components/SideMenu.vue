<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
  const config = useRuntimeConfig()
  const router = useRouter()
  const generalStore = useGeneralStore()
  const { drawerMenu } = storeToRefs(generalStore)

  const setDrawerMenu = generalStore.setDrawerMenu

  const bottomThreshold = 900

  const changeRoute = (page = '') => {
    router.push(`/${page}`)
  }

  const scrollToBottom = () => {
    const body = document.body
    const html = document.documentElement

    var documentHeight = Math.max(
      body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight
    )

    window.scrollTo({ top: documentHeight - bottomThreshold, behavior: "smooth" })

    setDrawerMenu(false)
  }
</script>

<template>
  <v-navigation-drawer
    v-model="drawerMenu"
    class="bg-background"
    temporary
    width="300"
  >
    <div class="mb-5 mt-2 pl-5 pr-2">
      <galvesmash-logo
        color="secondary"
        height="52"
        width="140"
        @click="changeRoute()"
      />

      <h2 class="d-flex font-italic justify-space-between no-letter-spacing no-user-select text-headline text-secondary text-uppercase w-100">
        <span v-for="(letter, index) in t('general.headline.frontendDeveloper')" :key="index">
          {{ letter }}
        </span>
      </h2>
    </div>

    <v-divider />

    <div class="d-flex flex-column mt-2">
      <v-btn
        color="secondary"
        class="font-italic justify-start text-headline-subtitle"
        variant="text"
        @click="changeRoute('about')"
      >
        {{ t('general.menu.about') }}
      </v-btn>

      <v-btn
        color="secondary"
        class="font-italic justify-start text-headline-subtitle"
        variant="text"
        @click="scrollToBottom"
      >
        {{ t('general.menu.contact') }}
      </v-btn>
    </div>

    <template v-slot:append>
      <v-divider />

      <p class="font-italic py-3 px-4 text-caption text-secondary">v{{ config.public.version }}</p>
    </template>
  </v-navigation-drawer>
</template>

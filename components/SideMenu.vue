<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useGeneralStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
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
  </v-navigation-drawer>
</template>

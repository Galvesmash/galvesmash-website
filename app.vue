<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { useI18n } from 'vue-i18n';
  import { useGeneralStore, useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'
  
  const DEFAULT_LAYOUT = 'default'
  
  const theme = useTheme()
  const router = useRouter()
  const generalStore = useGeneralStore()
  const themeStore = useThemeStore()
  const { t } = useI18n();
  const { drawerMenu, isMobileView } = storeToRefs(generalStore)
  const { currentLayout, currentTheme } = storeToRefs(themeStore)
  
  themeStore.setCurrentLayout('default')
  themeStore.setCurrentTheme(theme.global.name.value)

  function changeRoute (page = '') {
    router.push(`/${page}`)
  }

  function onResize () {
    let newMobileViewValue = window.innerWidth <= 960

    if (isMobileView.value === newMobileViewValue) return

    generalStore.setIsMobileView(newMobileViewValue)
  }

  onMounted(() => {
    onResize()

    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })
</script>

<template>
  <NuxtLayout
    :name="currentLayout"
  >
    <v-app
      :theme="currentTheme"
    >
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
          <v-btn
            class="font-italic justify-start text-headline"
            variant="text"
            @click="changeRoute('about')"
          >
            {{ t('general.menu.about') }}
          </v-btn>
  
          <v-btn
            class="font-italic justify-start text-headline"
            variant="text"
            @click="changeRoute('contact')"
          >
            {{ t('general.menu.contact') }}
          </v-btn>
        </div>
      </v-navigation-drawer>

      <v-container class="px-5 px-md-16 py-0" max-width="1440">
        <NuxtPage />
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<style lang="scss">
.v-application {
  &__wrap {
    min-height: calc(100dvh - 203px) !important;
  
    @media screen and (max-width: 960px) {
      min-height: calc(100dvh - 60px) !important;
    }
  }
}

.text-headline {
  font-size: 12px !important;
  font-weight: 100 !important;
  letter-spacing: 11px !important;
  line-height: 10px !important;
  
  &-small {
    font-size: 10px !important;
    font-weight: 100 !important;
    letter-spacing: 9px !important;
    line-height: 10px !important;
  }

  &-title {
    font-size: 26px !important;
    font-weight: 700 !important;
    letter-spacing: 9px !important;
    line-height: 28px !important;
  }
  
  &-subtitle {
    font-size: 16px !important;
    font-weight: 500 !important;
    letter-spacing: 4px !important;
    line-height: 18px !important;
  }
}

.z-index {
  &-10 {  z-index: 10; }
  &-20 {  z-index: 20; }
  &-50 {  z-index: 50; }
  &-100 {  z-index: 100; }
}

.filter-blur {
  &-1 {  filter: blur(1px); }
  &-2 {  filter: blur(2px); }
  &-5 {  filter: blur(5px); }
  &-10 {  filter: blur(10px); }
}
</style>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useTheme } from 'vuetify'
  import { useGeneralStore, useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'

  const { t } = useI18n()
  const theme = useTheme()
  const router = useRouter()
  const generalStore = useGeneralStore()
  const themeStore = useThemeStore()
  const { drawerMenu, isMobileView } = storeToRefs(generalStore)
  const { availableThemes, currentTheme } = storeToRefs(themeStore)

  const setCurrentTheme = themeStore.setCurrentTheme
  const setDrawerMenu = generalStore.setDrawerMenu

  theme.global.name.value = currentTheme.value

  const changeRoute = (page = '') => {
    router.push(`/${page}`)
  }

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value[availableThemes.value[0]]
      ? availableThemes.value[1]
      : availableThemes.value[0]

    setCurrentTheme(theme.global.name.value)
  }
</script>

<template>
  <v-toolbar
    :height="isMobileView ? 60 : 203"
    color="background"
    dark
    flat
  >
    <v-container class="align-self-start px-5 px-md-0 py-0" max-width="1440">
      <div class="d-flex flex-row flex-md-column-reverse justify-space-between w-100">
        <div class="d-flex">
          <div class="align-center d-flex justify-center mx-auto">
            <v-btn
              class="d-none d-md-block font-italic mb-2 mr-md-12 pl-3 pr-1 text-headline"
              variant="text"
              @click="changeRoute('about')"
            >
              {{ t('general.menu.about') }}
            </v-btn>

            <v-app-bar-nav-icon
              v-if="isMobileView"
              class="mr-5"
              height="24px"
              text
              width="24px"
              @click.stop="setDrawerMenu(!drawerMenu)"
            />

            <responsive-logo @handle-interaction="changeRoute">
              <template v-slot:before>
                <div v-if="!isMobileView" class="position-absolute right-0 top-0 w-66 mr-1 pt-1 pt-md-0">
                  <h6 class="font-italic text-headline text-no-wrap text-secondary text-uppercase w-100">
                    {{ t('general.headline.gameDeveloper') }}
                  </h6>
                </div>
              </template>
            </responsive-logo>

            <v-btn
              class="d-none d-md-block font-italic mb-2 ml-md-12 pl-3 pr-1 text-headline"
              variant="text"
              @click="changeRoute('contact')"
            >
              {{ t('general.menu.contact') }}
            </v-btn>
          </div>
        </div>

        <div class="align-center d-flex justify-end ml-6 ml-md-0 my-0 my-md-3">
          <v-btn
            color="secondary"
            density="compact"
            :icon="`fa-solid fa-${currentTheme === availableThemes[0] ? 'moon' : 'sun'}`"
            @click="toggleTheme()"
          />
        </div>
      </div>
    </v-container>
  </v-toolbar>
</template>

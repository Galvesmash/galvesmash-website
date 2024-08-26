<script scoped>
  import { useTheme } from 'vuetify'
  import { useGeneralStore, useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'

  export default defineComponent({
    name: 'AppHeader',

    setup() {
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

      return {
        availableThemes,
        changeRoute,
        currentTheme,
        drawerMenu,
        isMobileView,
        setCurrentTheme,
        setDrawerMenu,
        toggleTheme
      }
    }
  })
</script>

<template>
  <v-toolbar
    :height="isMobileView ? 60 : 203"
    color="background"
    dark
    flat
  >
    <v-container class="align-self-start px-5 py-0" max-width="1440">
      <div class="d-flex flex-row flex-md-column-reverse justify-space-between w-100">
        <div class="d-flex">
          <div class="align-center d-flex justify-center mx-auto">
            <v-btn
              class="d-none d-md-block font-italic mb-2 mr-md-12 pl-3 pr-1 text-headline"
              variant="text"
              @click="changeRoute('about')"
            >
              {{ $t('general.menu.about') }}
            </v-btn>

            <div class="align-center d-flex position-relative py-1 py-md-0" @click="changeRoute()">
              <div v-if="!isMobileView" class="position-absolute right-0 top-0 w-66 mr-1 pt-1 pt-md-0">
                <h6 class="font-italic text-headline text-no-wrap text-secondary text-uppercase w-100">
                  {{ $t('general.headline.gameDeveloper') }}
                </h6>
              </div>

              <v-app-bar-nav-icon
                v-else
                class="mr-3"
                height="24px"
                text
                width="24px"
                @click.stop="setDrawerMenu(!drawerMenu)"
              />

              <galvesmash-logo
                color="secondary"
                :height="isMobileView ? '52' : '101'"
                :width="isMobileView ? '140' : '368'"
              />
            </div>

            <v-btn
              class="d-none d-md-block font-italic mb-2 ml-md-12 pl-3 pr-1 text-headline"
              variant="text"
              @click="changeRoute('contact')"
            >
              {{ $t('general.menu.contact') }}
            </v-btn>
          </div>
        </div>

        <div class="align-center d-flex justify-end my-3">
          <v-btn
            color="secondary"
            density="compact"
            :icon="`mdi-weather-${currentTheme === availableThemes[0] ? 'night' : 'sunny'}`"
            @click="toggleTheme()"
          />
        </div>
      </div>
    </v-container>
  </v-toolbar>
</template>

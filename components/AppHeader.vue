<template>
  <v-toolbar
    :height="isMobileView ? 60 : 203"
    color="background"
    dark
    flat
  >
  <div class="align-self-start d-flex flex-row flex-md-column-reverse justify-space-between px-5 w-100">
      <div class="d-flex">
        <div class="d-flex justify-center mx-auto">
          <galvesmash-logo :height="isMobileView ? 60 : 101" :width="isMobileView ? 140 : 368" />
        </div>
        <!-- {{ $t('general.galvesmash') }} -->
      </div>

      <div class="align-center d-flex justify-end my-3">
        <v-btn
          color="secondary"
          density="compact"
          :icon="`mdi-weather-${currentTheme === defaultTheme ? 'night' : 'sunny'}`"
          @click="toggleTheme()"
        />
      </div>
    </div>
  </v-toolbar>
</template>

<script scoped>
  import { useTheme } from 'vuetify'
  import { useThemeStore } from '~/store'
  import { storeToRefs } from 'pinia'

  export default defineComponent({
    name: 'AppHeader',

    setup() {
      const theme = useTheme()
      const themeStore = useThemeStore()
      const { availableThemes, currentTheme, defaultTheme, isMobileView } = storeToRefs(themeStore)
      const setCurrentTheme = themeStore.setCurrentTheme

      theme.global.name.value = currentTheme.value

      const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value[availableThemes.value[0]]
          ? availableThemes.value[1]
          : availableThemes.value[0]

        setCurrentTheme(theme.global.name.value)
      }

      return {
        availableThemes,
        currentTheme,
        defaultTheme,
        isMobileView,
        setCurrentTheme,
        theme,
        toggleTheme
      }
    }
  })
</script>

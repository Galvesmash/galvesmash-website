<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useTheme } from 'vuetify'
  import { useGeneralStore, useThemeStore } from '~/store'

  const { t } = useI18n()
  const theme = useTheme()
  const generalStore = useGeneralStore()
  const themeStore = useThemeStore()
  const { isMobileView } = storeToRefs(generalStore)
  const { availableThemes, currentTheme } = storeToRefs(themeStore)

  const setCurrentTheme = themeStore.setCurrentTheme

  theme.global.name.value = currentTheme.value

  const toggleTheme = () => {
    theme.global.name.value = (theme.global.current.value.dark)
      ? availableThemes.value[1]
      : availableThemes.value[0]

    setCurrentTheme(theme.global.name.value)
  }
</script>

<template>
  <section>
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :aria-label="t('general.ariaLabel.themeSelector')"
        :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
        :icon="`fa-solid fa-${currentTheme === availableThemes[0] ? 'moon' : 'sun'}`"
        :style="{ transition: 'all .3s' }"
        class="opacity-100"
        density="compact"
        variant="plain"
        @click="toggleTheme()"
      />
    </v-hover>
  </section>
</template>

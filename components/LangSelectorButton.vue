<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import moment from 'moment';
  import { useGeneralStore, useLocaleStore } from '~/store'

  const generalStore = useGeneralStore()
  const localeStore = useLocaleStore()
  const { t, locale } = useI18n()
  const { isMobileView } = storeToRefs(generalStore)
  const { availableLocales } = storeToRefs(localeStore)

  const setCurrentLocale = localeStore.setCurrentLocale

  const selectLanguage = (lang: string) => {
    setCurrentLocale(lang)

    locale.value = lang
    moment.locale(lang)
  }
</script>

<template>
  <section>
    <v-menu activator="parent" location="bottom">
      <template v-slot:activator>
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
            v-bind="props"
            :color="isHovering && !isMobileView ? 'primary' : 'secondary'"
            :style="{ transition: 'all .3s' }"
            class="opacity-100"
            density="compact"
            variant="plain"
            icon="fa-solid fa-earth-americas"
          />
        </v-hover>
      </template>
  
      <v-list>
        <v-list-item
          v-for="(item, index) in availableLocales"
          :key="index"
          :value="index"
          @click="selectLanguage(item)"
        >
          <v-list-item-title class="no-user-select">{{ t(`general.language.${item}`) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </section>
</template>

<template>
  <v-toolbar
    class="header"
    color="background"
    dark
    flat
  >
    {{ $t('general.galvesmash') }}

    <v-btn
      color="secondary"
      density="compact"
      :icon="`mdi-weather-${currentTheme === defaultTheme ? 'night' : 'sunny'}`"
      @click="toggleTheme()"
    />
  </v-toolbar>
</template>

<script>
  import { useTheme } from 'vuetify';
  import { useThemeStore } from '~/store';
  import { storeToRefs } from 'pinia';

  export default defineComponent({
    name: 'AppHeader',

    setup() {
      const theme = useTheme();
      const themeStore = useThemeStore();
      const { availableThemes, currentTheme, defaultTheme } = storeToRefs(themeStore);
      const setCurrentTheme = themeStore.setCurrentTheme;

      theme.global.name.value = currentTheme.value;

      const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value[availableThemes.value[0]]
          ? availableThemes.value[1]
          : availableThemes.value[0];

        setCurrentTheme(theme.global.name.value);
      }

      return {
        availableThemes,
        currentTheme,
        defaultTheme,     
        setCurrentTheme,
        theme,
        toggleTheme
      };
    },
  });
</script>

<style lang="scss">
  .header {
    // 
  } 
</style>

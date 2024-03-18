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
      :icon="`mdi-weather-${currentTheme == defaultTheme ? 'night' : 'sunny'}`"
      @click="toggleTheme"
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

      return {
        availableThemes,
        currentTheme,
        defaultTheme,
        setCurrentTheme,
        theme
      };
    },

    created() {
      this.theme.global.name.value = this.currentTheme;
    },

    methods: {
      toggleTheme() {
        this.theme.global.name.value = this.theme.global.current.value[this.availableThemes[0]]
          ? this.availableThemes[1]
          : this.availableThemes[0];

        this.setCurrentTheme(this.theme.global.name.value);
      },
    },
  });
</script>

<style lang="scss">
  .header {
    // 
  } 
</style>

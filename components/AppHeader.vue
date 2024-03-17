<template>
  <v-toolbar
    class="header"
    color="background"
    dark
    flat
  >
    Galvesmash

    <v-btn
      @click="toggleTheme"
    >
      Toggle theme
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { useTheme } from 'vuetify';
  // import { mapGetters, mapMutations } from 'vuex';
  import { useThemeStore } from '~/store';
  import { storeToRefs } from 'pinia';

  export default defineComponent({
    name: 'AppHeader',

    setup() {
      const theme = useTheme();
      const themeStore = useThemeStore();
      const { availableThemes } = storeToRefs(themeStore);

      return {
        availableThemes,
        setTheme: themeStore.setTheme,
        theme
      };
    },

    methods: {
      // ...mapMutations('galvesmash/theme', [
      //   'setTheme',
      // ]),

      toggleTheme() {
        this.theme.global.name.value = this.theme.global.current.value[this.availableThemes[0]]
          ? this.availableThemes[1]
          : this.availableThemes[0];

        this.setTheme(this.theme.global.name.value);
      },
    },

    // computed: {
    //   ...mapGetters('galvesmash/theme', {
    //     availableThemes: 'getAvailableThemes',
    //   }),
    // },
  });
</script>

<style lang="scss">
  .header {
    // 
  } 
</style>

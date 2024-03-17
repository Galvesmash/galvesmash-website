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
  import { mapGetters, mapMutations } from 'vuex';

  export default defineComponent({
    name: 'AppHeader',

    setup() {
      const theme = useTheme();

      return {
        theme
      };
    },

    methods: {
      ...mapMutations('galvesmash/theme', [
        'setTheme',
      ]),

      toggleTheme() {
        this.theme.global.name.value = this.theme.global.current.value[this.availableThemes[0]]
          ? this.availableThemes[1]
          : this.availableThemes[0];

        this.setTheme(this.theme.global.name.value);
      },
    },

    computed: {
      ...mapGetters('galvesmash/theme', {
        availableThemes: 'getAvailableThemes',
      }),
    },
  });
</script>

<style lang="scss">
  .header {
    // 
  } 
</style>

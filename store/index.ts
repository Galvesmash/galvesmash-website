// import galvesmash from './galvesmash';
// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     // 
//   },
//   getters: {
//     // 
//   },
//   mutations: {
//     // 
//   },
//   actions: {
//     // 
//   },
//   modules: {
//     galvesmash,
//   }
// });

import locale from './locale';
import theme from './theme';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    packageVersion: process.env.VUE_APP_VERSION || '0',
  }),
  getters: () => ({
    appVersion: (state) => {
      return state.packageVersion
    },
  }),
});

export const useLocaleStore = defineStore('locale', locale);
export const useThemeStore = defineStore('theme', theme);

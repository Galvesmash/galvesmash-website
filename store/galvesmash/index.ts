import general from './general';
import theme from './theme';

export default {
  namespaced: true,
  state: {
    packageVersion: process.env.VUE_APP_VERSION || '0',
  },
  getters: {
    appVersion: (state) => {
      return state.packageVersion
    },
  },
  mutations: {
    // 
  },
  actions: {
    // 
  },
  modules: {
    general,
    theme,
  }
};
import getters from './getters';
import actions from './actions';

const state = () => ({
  availableLocales: [
    'en',
    'pt-br'
  ],
  defaultLocale: 'en',
  locale: '',
});

export default {
  namespaced: true,
  state,
  getters,
  actions
};
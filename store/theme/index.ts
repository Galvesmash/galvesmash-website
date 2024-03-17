import getters from './getters';
import actions from './actions';

const state = () => ({
  availableThemes: [
    'dark',
    'light'
  ],
  defaultTheme: 'dark',
  theme: '',
});

export default {
  namespaced: true,
  state,
  getters,
  actions
};
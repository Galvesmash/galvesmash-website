export default {
  reset(state: object) {
    state.defaultTheme = 'dark';
    state.theme = '';
  },

  setTheme(state: object, payload: string) {
    state.theme = payload;
  },
};
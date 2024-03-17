export default {
  reset(state: object) {
    state.availableLocales: [
      'en',
      'pt-br'
    ];
    state.defaultLocale: 'en';
    state.locale: '';
  },

  setLocale(state: object, payload: string) {
    state.locale = payload;
  },
};
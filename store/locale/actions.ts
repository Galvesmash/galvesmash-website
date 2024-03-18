// import axios from 'axios';
// import consts from '@/static/ts/consts';

export default {
  reset() {
    // this.availableLocales = [
    //   'en',
    //   'pt-br'
    // ];
    // this.defaultLocale = 'en';
    // this.locale = '';
    this.$reset();
  },

  setCurrentLocale(payload: string) {
    this.currentLocale = payload;
  },
}
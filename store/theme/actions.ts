// import axios from 'axios';
// import consts from '@/static/ts/consts';

export default {
  reset() {
    // this.defaultTheme = 'dark';
    // this.theme = '';
    this.$reset();
  },

  setCurrentTheme(payload: string) {
    this.currentTheme = payload;
  },
}
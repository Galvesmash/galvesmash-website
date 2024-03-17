// import axios from 'axios';
// import consts from '@/static/ts/consts';

export default {
  reset() {
    // this.defaultTheme = 'dark';
    // this.theme = '';
    this.$reset();
  },

  setTheme(payload: string) {
    this.theme = payload;
  },
}
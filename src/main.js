import Vue from 'vue';
import App from './App.vue';
import SvgIcon from './icons/index.js';

Vue.use(SvgIcon);

new Vue({
  el: '#app',
  render: (h) => h(App),
});

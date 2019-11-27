import Vue, { VNode } from 'vue';
import store from './store';
import router from './router';
import './css/style.css';
import Container from './container/index.vue';

new Vue({
  el: '#app',
  store,
  router,
  render: (h): VNode => h(Container)
});

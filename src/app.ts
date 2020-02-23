import Vue, { VNode } from 'vue';
import './css/common.css';
import store from './store';
import router from './router';
import Container from './container/index.vue';

new Vue({
  el: '#app',
  store,
  router,
  render: (h): VNode => h(Container)
});

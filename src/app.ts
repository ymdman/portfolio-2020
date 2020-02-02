import Vue, { VNode } from 'vue';
import './css/style.css';
import store from './store';
import router from './router';
import Container from './container/index.vue';

new Vue({
  el: '#app',
  store,
  router,
  render: (h): VNode => h(Container)
});

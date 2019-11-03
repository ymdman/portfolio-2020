import Vue, { VNode } from 'vue';
import store from './store';
import './css/style.css';
import Container from './container/index.vue';

new Vue({
  el: '#app',
  store,
  render: (h): VNode => h(Container)
});

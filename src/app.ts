import Vue, { VNode } from 'vue';
import './css/app.css';
import Container from './container/index.vue';

new Vue({
  el: '#app',
  render: (h): VNode => h(Container)
});

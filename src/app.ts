import Vue from 'vue';
import './css/app.css'
import Container from './container/index.vue'

new Vue({
  el:'#app',
  render: h => h(Container)
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import Skill from '../pages/PfoSkill/index.vue';
import Top from '../pages/PfoTop/index.vue';
import Works from '../pages/PfoWorks/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    }
  ]
});

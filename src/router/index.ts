import Vue from 'vue';
import VueRouter from 'vue-router';
import Career from '../pages/PfoCareer/index.vue';
import Skill from '../pages/PfoSkill/index.vue';
import Top from '../pages/PfoTop/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/career',
      name: 'career',
      component: Career
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/',
      name: 'top',
      component: Top
    }
  ]
});

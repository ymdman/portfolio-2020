import Vue from 'vue';
import VueRouter from 'vue-router';
import location from '../store/modules/location';
import NotFound from '../pages/NotFound/index.vue';
import Skill from '../pages/Skill/index.vue';
import Top from '../pages/Top/index.vue';
import Works from '../pages/Works/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/skill',
      name: 'skill',
      component: Skill,
      beforeEnter: (to, from, next): void => {
        location.update(to);
        next();
      }
    },
    {
      path: '/',
      name: 'top',
      component: Top,
      beforeEnter: (to, from, next): void => {
        location.update(to);
        next();
      }
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
      beforeEnter: (to, from, next): void => {
        location.update(to);
        next();
      }
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
      beforeEnter: (to, from, next): void => {
        location.update(to);
        next();
      }
    }
  ]
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import location from '../store/modules/location';
import NotFound from '../pages/NotFound/index.vue';
import Skill from '../pages/Skill/index.vue';
import Top from '../pages/Top/index.vue';
import Works from '../pages/Works/index.vue';
import Work from '../pages/Work/index.vue';

Vue.use(VueRouter);

type Position = {
  x: number;
  y: number;
};

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
      path: '/works/:id',
      name: 'work',
      component: Work,
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
  ],
  scrollBehavior(to, from, savedPosition): Position {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

import Vue from 'vue';
import Router from 'vue-router';
// import Hello from 'components/Hello';
import Index from 'components/Index';
import Solution from 'components/Solution';
import Attitude from 'components/Attitude';
import News from 'components/News';
import Development from 'components/Development';
import nofound from 'components/nofound';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution,
    },
    {
      path: '/attitude',
      name: 'Attitude',
      component: Attitude,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/development',
      name: 'Development',
      component: Development,
    },
    {
      path: '*',
      name: 'nofound',
      component: nofound,
    },
  ],
});

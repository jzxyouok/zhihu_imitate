import Vue from 'vue';
import Router from 'vue-router';
import IndexView from '@/views/IndexView';
import Hello from '@/components/Hello';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
});

import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/:markdown_id?/edit',
      name: 'edit',
      component: Edit,
    },
  ],
});

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'recharges-payments'
    },
    {
      path: '/recharges-payments',
      name: 'recharges-payments',
      component: () => import('../views/RechargesPaymentsView.vue'),
      meta: { requireAuthToken: true }
    },
    {
      path: '/recharges',
      name: 'recharges',
      component: () => import('../views/RechargesView.vue'),
      meta: { requireAuthToken: true }
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/UnauthorizedView.vue')
    }
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuthToken)) {
    if (!localStorage.getItem('token')) {
      next({ name: 'unauthorized' });
    }

    next();

  } else {
    next();
  }
});

export default router

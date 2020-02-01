import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';
import Shops from '../views/Shop.vue';
import Line from '../views/Line.vue';
const credit = JSON.parse(localStorage.getItem('credit'));

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/shops' 
  },
  {
    path: '/shops',
    name: 'Shops',
    component: Shops
  },
  {
    path: '/line',
    name: 'Line',
    component: Line
  },
  {
    path: '/line/success',
    name: 'LineSuccess',
    component: () => import('../views/LineSuccess.vue')
  },
  {
    path: '/line/fail',
    name: 'LineFail',
    component: () => import('../views/LineFail.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/shops'
  },
  {
    path: '/admin/shops',
    name: 'admin-shops',
    component: () => import('../views/AdminShops.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes
})

router.beforeEach(async (to, from , next) => {
  if(!credit && to.name !=='SignIn' && to.name !=='Line' && to.name !== 'LineSuccess' && to.name !== 'LineFail') {
    if(to.name === 'SignIn') {
      next('/signin');
      return;
    } else {
      next('/line');
      return;
    }
  }

  if (credit) {
    if (to.name === 'SignIn' || to.name === 'Line') {
      next('/shops');
      return;
    }
  }

  if (credit && credit.user.isAdmin === false) {
    if (to.path.includes('/admin')) {
      next('/404');
      return;
    }
  }
  next();
})

export default router

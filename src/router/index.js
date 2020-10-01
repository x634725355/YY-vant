import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: 'index',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          title: '个人首页',
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
      },
    ],
  },
  {
    path: '/introduce',
    name: 'introduce',
    meta: {
      title: '医院介绍',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hosHome/Introduce.vue')
  },
  {
    path: '/reservation',
    name: 'reservation',
    meta: {
      title: '预约挂号',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/hosHome/Reservation.vue')
  }
]

const router = new VueRouter({
  routes
});

//动态设置页面标题
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;

  next();

})

export default router

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import(/* webpackChunkName: "about" */ './views/city/City')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "about" */ './views/detail/Detail')
    }
  ],
  // 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

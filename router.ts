import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routerOptions = [
  {
    path: '/',
    component: 'SingUp'
  },
  {
    path: '/login',
    component: 'Login'
},
{
  path: '/first',
  component: 'First'
}
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`)
  }
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

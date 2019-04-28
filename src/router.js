import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Add from './views/Add'
import Bank from './views/Bank'
import AddBank from './views/forms/AddBank'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/bank',
      name: 'bank',
      component: Bank
    },
    {
      path: '/add-bank',
      name: 'addBank',
      component: AddBank
    }
  ]
})

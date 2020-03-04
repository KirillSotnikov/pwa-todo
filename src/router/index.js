import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'

import AppList from '@/pages/AppList/Main'
import AppTodo from '@/pages/AppList/Todo'
import AppCalculator from '@/pages/AppList/Calculator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/list',
      component: AppList
    },
    {
      path: '/list/todo',
      component: AppTodo
    },
    {
      path: '/list/calculator',
      component: AppCalculator
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import About from '@/pages/About'

import AppList from '@/pages/AppList/index'
import AppTodo from '@/pages/AppList/Todo'

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
    }
  ]
})
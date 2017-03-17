import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/views/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [{
        path: '/index',
        name: 'Index',
        component: require('../views/Index')
      }, {
        path: '/download',
        name: 'Download',
        component: require('../views/Download')
      }]
    }
  ]
})

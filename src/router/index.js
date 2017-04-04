import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/views/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/albums/:id/pics',
      name: 'AlbumsPics',
      component: require('@/views/AlbumsPics')
    },
    {
      path: '/search/result',
      name: 'SeatchResult',
      component: require('@/views/SearchResult')
    }
  ]
})

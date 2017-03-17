// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App'
import router from './router'

import Nav from './components/Nav'
import Footer from './components/Footer'

import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.component('mj-nav', Nav)
Vue.component('mj-footer', Footer)

// router.afterEach((to, from) => {
//   if (to.path === '/') {
//     return router.push({'path': 'index'})
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import MuseUI from 'muse-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'

import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(MuseUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

router.afterEach((to, from) => {
  if (from.path === '/') {
    return
  }
  if (from.path.split('/')[1] === 'index') {
    let container = document.getElementById('index-container')
    container.scrollTop = 0
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

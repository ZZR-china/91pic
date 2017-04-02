// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import SearchHeader from '@/components/SearchHeader'

import App from './App'
import router from './router'
import store from './store'
import {picurl} from './filters'
import vImg from '@/components/Lazyimg'

import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

Vue.component('search-header', SearchHeader)
Vue.component('v-img', vImg)

Vue.use(VueAwesomeSwiper)
Vue.use(MuseUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/404.png'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1
})

Vue.filter('pic', picurl)

router.afterEach((to, from) => {
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

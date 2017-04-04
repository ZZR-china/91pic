import Vue from 'vue'
import Vuex from 'vuex'

import * as main from './modules/main'
import * as search from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    main,
    search
  },
  state: {
    title: '91看图',
    header: '',
    indexalbums: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

export default store

import axios from 'axios'
import {albums, categories} from 'apis'
import * as types from '../mutation-types'

export const state = {
  categories: [],
  category_name: '',
  data: [],
  skip: 0
}

export const getters = {
  getSearchCategories: state => state.categories,
  getSearchData: state => state.data,
  getSearchSkip: state => state.skip
}

export const actions = {
  getSearchCategories ({commit}, {limit = 5}) {
    axios.get(categories.index, {
      params: {
        limit
      }
    })
    .then(rs => {
      const categories = rs.data
      commit(types.SET_SEARCHCATEGORIES, {categories})
    })
    .catch(err => {
      console.error(err)
    })
  },
  addSearchCategories ({commit}, {limit = 4, skip = 4}) {
    axios.get(categories.index, {
      params: {
        limit,
        skip
      }
    })
    .then(rs => {
      const addcategories = rs.data
      let categories = state.categories.concat(addcategories)
      commit(types.SET_SEARCHCATEGORIES, {categories})
    })
    .catch(err => {
      console.error(err)
    })
  },
  getSearchData ({commit}, {limit = 6, categoryName = ''}) {
    axios.get(albums.index, {
      params: {
        limit,
        category_name: categoryName
      }
    })
    .then(rs => {
      console.log('rs', rs)
      if (rs.status === 200) {
        const data = rs.data
        commit(types.SET_SEARCHCATEGORIES_NAME, {categoryName})
        commit(types.SET_SEARCHSKIP, {skip: 0})
        commit(types.SET_SEARCHDATA, {data})
      }
    })
    .catch(err => {
      console.error(err)
    })
  },
  addSearchData ({commit}, {limit = 6, skip = 0}) {
    axios.get(albums.index, {
      params: {
        limit,
        skip,
        category_name: state.category_name
      }
    })
    .then(rs => {
      if (rs.status === 200) {
        let data = rs.data
        data = state.data.concat(data)
        commit(types.SET_SEARCHSKIP, {skip})
        commit(types.SET_SEARCHDATA, {data})
      }
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export const mutations = {
  [types.SET_SEARCHCATEGORIES] (state, {categories}) {
    state.categories = categories
  },
  [types.SET_SEARCHDATA] (state, {data}) {
    state.data = data
  },
  [types.SET_SEARCHSKIP] (state, {skip}) {
    state.skip = skip
  },
  [types.SET_SEARCHCATEGORIES_NAME] (state, {categoryName}) {
    state.category_name = categoryName
  }
}

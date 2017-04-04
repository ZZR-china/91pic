import axios from 'axios'
import {categories} from 'apis'
import * as types from '../mutation-types'
// import window from 'window'

export const state = {
  categories: [],
  skip: 0,
  limit: 0
}

export const getters = {
  getSearchCategories: state => state.categories
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
  }
}

export const mutations = {
  [types.SET_SEARCHCATEGORIES] (state, {categories}) {
    state.categories = categories
  }
}

import axios from 'axios'
import {albums} from 'apis'
import * as types from '../mutation-types'

export const state = {
  albums: [],
  skip: 0,
  top: 0
}

export const getters = {
  getMainAlbums: state => state.albums,
  getMainTop: state => state.top,
  getMainSKip: state => state.skip
}

export const actions = {
  getMainAlbums ({commit}, {limit = 6}) {
    axios.get(albums.index, {
      params: {
        limit
      }
    })
    .then(rs => {
      const albums = rs.data
      commit(types.SET_MAINALBUMS, {albums})
    })
    .catch(err => {
      console.error(err)
    })
  },
  addMainAlbums ({commit}, {limit = 6, skip = 6}) {
    axios.get(albums.index, {
      params: {
        limit,
        skip
      }
    })
    .then(rs => {
      const addalbums = rs.data
      const statealbums = state.albums
      let albums = statealbums.concat(addalbums)
      // albums = Array.from(new Set(albums))
      commit(types.SET_MAINSKIP, {skip})
      commit(types.SET_MAINALBUMS, {albums})
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export const mutations = {
  [types.SET_MAINALBUMS] (state, {albums}) {
    state.albums = albums
  },
  [types.SET_MAINSKIP] (state, {skip}) {
    state.skip = skip
  },
  [types.SET_MAINTOP] (state, {top}) {
    state.top = top
  }
}

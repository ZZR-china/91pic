<template>
  <div class="index">
    <search-header title="91看图"></search-header>
    <div class="index-albums">
      <mu-flexbox v-for="item in albums" :key="item._id" class="index-albums-box" align="center" justify="space-between">
        <mu-flexbox-item grow="2" class="index-albums-box__img">
          <img :src="item.hotest_pic_url" :alt="item.title">
        </mu-flexbox-item>
        <mu-flexbox-item grow="6" class="index-albums-box__detail">
          <p>{{item.title}}</p>
          <p>{{item.view}}</p>
          <p>{{item.formate_time.full}}</p>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {album} from 'apis'

export default {
  name: 'contain',
  created () {
    this.initAlbums()
  },
  data () {
    return {
      albums: []
    }
  },
  computed: {
  },
  methods: {
    initAlbums () {
      axios.get(album.index)
      .then(rs => {
        this.albums = rs.data
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
<style lang="less">
.index {
  padding: .6rem .6rem;
  &-albums {
    &-box {
      margin-bottom: 1rem;
      img {
        width: 100%;
        max-height: 108px;
        overflow-y: hidden;
      }
    }
  }
}
</style>

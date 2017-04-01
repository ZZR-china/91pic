<template>
  <div class="index">
    <search-header title="91看图"></search-header>
    <div class="index-albums">
      <mu-flexbox v-for="item in albums" :key="item._id" class="index-albums-box" align="center" justify="space-between" @click.native="watchPics(item._id)">
        <mu-flexbox-item grow="2" class="index-albums-box__img">
          <img :src="item.hotest_pic_url" :alt="item.title">
        </mu-flexbox-item>
        <mu-flexbox-item grow="6" class="index-albums-box__detail">
          <p>{{item.title}}</p>
          <p>{{'浏览量: ' + item.view}}</p>
          <p>{{item.formate_time.full}}</p>
          <p>{{item._id}}</p>
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {albums} from 'apis'

export default {
  name: 'contain',
  created () {
    this.initAlbums()
  },
  data () {
    return {
      albums: [],
      loading: false,
      scroller: null,
      skip: 0
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    initAlbums () {
      axios.get(albums.index)
      .then(rs => {
        this.albums = rs.data
      })
      .catch(err => {
        console.error(err)
      })
    },
    loadMore () {
      this.loading = true
      const that = this
      setTimeout(() => {
        axios.get(albums.index, {
          params: {
            skip: this.skip + 10
          }
        })
        .then(rs => {
          console.log(rs)
          const data = rs.data
          for (let i = 0, len = data.length; i < len; i++) {
            that.albums.push(data[i])
          }
          that.skip += 10
          that.loading = false
        })
        .catch(err => {
          console.error(err)
        })
      }, 2000)
    },
    watchPics (id) {
      console.log('1445', id)
      this.$router.push({name: 'AlbumsPics', params: {id}})
    }
  }
}
</script>
<style lang="less">
.index {
  height: 72rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: .6rem .6rem;
  &-albums {
    &-box {
      max-height: 10rem;
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

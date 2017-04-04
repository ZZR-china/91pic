<template>
  <div class="index">
    <search-header :isFixed="isShow" title="91看图"></search-header>
    <div class="index-albums" :class="{'index-albums__headerisshow': isShow}">
      <mu-flexbox v-for="item in albums" :key="item._id" class="index-albums-box" align="center" justify="space-between" @click.native="watchPics(item._id)">
        <mu-flexbox-item grow="2" class="index-albums-box__img">
          <v-img :imgUrl="item.hotest_pic_url | pic"></v-img>
        </mu-flexbox-item>
        <mu-flexbox-item grow="6" class="index-albums-box__detail">
          <p class="index-albums-box__title">{{item.title}}</p>
          <p>浏览量:&nbsp;{{ item.view | isnull }}</p>
          <p>{{item.formate_time.full}}<span class="index-albums-box__hot">{{item.view | ishot}}</span></p>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    <div class="index-tools" :class="{'index-tools__show': isShow}" >
      <mu-float-button icon="arrow_upward" @click.native="Gotop" mini/>
      <mu-float-button icon="refresh" @click.native="Refresh" mini/>
      <mu-float-button icon="add" secondary class="index-albums-tools__add" @click.native="isShow = !isShow" />
    </div>
  </div>
</template>
<script>
import window from 'window'
import {albums as Albums} from 'apis'
import axios from 'axios'

export default {
  name: 'searchresult',
  created () {
    const query = this.$route.query
    const categoryName = query.category_name
    console.log('asd', categoryName)
    this.name = categoryName
    this.initAlbums({categoryName})
  },
  data () {
    return {
      name: '',
      loading: false,
      scroller: null,
      isHot: true,
      isShow: false,
      albums: []
    }
  },
  mounted () {
    const indexDom = window.document.querySelector('.index')
    this.scroller = this.$el
    const top = window.localStorage.getItem('searchTop')
    indexDom.scrollTop = top
  },
  methods: {
    initAlbums ({categoryName}) {
      axios.get(Albums.index, {
        params: {
          limit: 6,
          category_name: categoryName
        }
      })
      .then(rs => {
        this.albums = rs.data
      })
      .catch(err => {
        console.error(err)
      })
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        axios.get(Albums.index, {
          params: {
            limit: 6,
            skip: this.skip,
            category_name: this.name
          }
        })
        .then(rs => {
          const addalbums = rs.data
          this.albums = this.albums.concat(addalbums)
        })
        .catch(err => {
          console.error(err)
        })
        this.loading = false
      }, 1800)
    },
    watchPics (id) {
      const indexDom = window.document.querySelector('.index')
      window.localStorage.setItem('searchTop', indexDom.scrollTop)
      this.$router.push({name: 'AlbumsPics', params: {id}})
    },
    Gotop () {
      const indexDom = window.document.querySelector('.index')
      indexDom.scrollTop = -1000
      this.isShow = false
    },
    Refresh () {
      this.$router.go(0)
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/styles/helper.less";
@import "../assets/styles/colors.less";

.index {
  height: 30rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: .6rem .6rem;
  &-albums__headerisshow {
    padding-top: 3.9rem!important;
  }
  &-albums {
    padding-top: 1rem;
    &-box {
      .normal-shadow;
      height: 5.3rem;
      margin-bottom: 1rem;
      &__img {
        text-align: center;
        img {
          margin: 0;
          padding: 0;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          overflow-y: hidden;
        }
      }
      &__detail {
        padding: .2rem .2rem;
      }
      &__title {
        text-align: left;
      }
      &__hot {
        float: right;
        color: @red500;
        &:after {
          clear: both;
          content: '';
        }
      }
    }
  }
  &-tools {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    button {
      margin: .3rem 0;
      transition: transform .6s;
      transform: rotate(-360deg) scale(0);
      &:last-child {
        transform: rotate(-360deg) scale(.8);
      }
    }
    &__add {
      transition: rotate 2s;
    }
    &__addshow {
      transform: rotate(45deg);
    }
  }
  &-tools__show {
    button {
      transform: rotate(360deg) scale(1);
      &:last-child {
        transform: rotate(90deg) scale(1);
      }
    }
  }
}
</style>

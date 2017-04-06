<template>
  <div class="search-header" :class="{'is-fixed': isFixed}">
    <mu-flexbox class="search-header-box" align="center" justify="space-between">
      <mu-flexbox-item class="search-header-box__icon">
        <mu-icon value="dehaze" :size="34"/>
      </mu-flexbox-item>
      <mu-flexbox-item grow="4" class="search-header-box__input">
        <input class="" :placeholder="title" @click="showSearch"></input>
      </mu-flexbox-item>
      <mu-flexbox-item class="search-header-box__key">
        <mu-icon value="add" :size="34"/>
      </mu-flexbox-item>
    </mu-flexbox>
    <mu-flexbox :class="{'is-search': isSearch}" class="search-header-select" orient="vertical" >
      <mu-flexbox-item v-for="item in categories" :key="item._id" class="search-header-select__box" @click.native="showSearchResult(item.name)">
        {{item.name}}
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'search-header',
  created () {
    this.initCategories()
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isSearch: false
    }
  },
  computed: {
    ...mapGetters({
      'categories': 'getSearchCategories'
    })
  },
  methods: {
    ...mapActions([
      'getSearchCategories',
      'getSearchData'
    ]),
    initCategories () {
      if (this.categories.length < 1) {
        this.getSearchCategories({limit: 5})
      }
    },
    showSearchResult (categoryName) {
      console.log('categoryName', categoryName)
      const route = this.$route.path
      this.getSearchData({categoryName})
      this.isSearch = !this.isSearch
      if (route !== '/search/result') {
        this.$router.push({path: '/search/result'})
      }
    },
    showSearch () {
      this.isSearch = true
    }
  }
}
</script>
<style lang="less">
@import "../assets/styles/colors.less";
@import "../assets/styles/helper.less";

.is-fixed {
  position: fixed;
  width: 92.3%;
  background: white;
}

.is-search{
  z-index: 200;
  .search-header-select__box {
    color: @pink300;
    height: auto;
    padding: .6rem;
    border-top: 1px solid @pink50;
    &:last-child {
      border-bottom: 1px solid @pink50;
    }
  }
}

.search-header {
  z-index: 100;
  &-box {
    padding: .6rem .4rem;
    .normal-shadow;
    .mu-flexbox-item {
      text-align: center;
    }
    &__input {
      input {
        width: 100%;
        font-size: 1rem;
        border: none;
      } 
    }
  }
  &-select {
    box-sizing: border-box;
    background-color: white;
    &__box {
      height: 0;
      padding: 0;
      color: transparent;
      transition: padding .4s;
      background-color: white;
      margin: 0;
      margin-top: 0!important;
    }
  }
}
</style>

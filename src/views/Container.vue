<template>
  <div class="index">
    <div class="index-title">
      <mu-appbar title="91看图">
        <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
      </mu-appbar>
    </div>
    <div class="index-container" id="index-container">
      <transition name="">
        <router-view></router-view>
      </transition>
    </div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="index" title="首页" icon="home"/>
        <mu-bottom-nav-item value="pictrue" title="看图" icon="picture_in_picture"/>
        <mu-bottom-nav-item value="collection" title="收藏" icon="favorite_border"/>
        <mu-bottom-nav-item value="mine" title="我的" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'contain',
  created () {
    var rname = this.$route.name
    switch (rname) {
      case 'index':
        this.bottomNav = 'index'
        break
      case 'pictrue':
        this.bottomNav = 'pictrue'
        break
      case 'collection':
        this.bottomNav = 'collection'
        break
      case 'mine':
        this.bottomNav = 'mine'
        break
      default:
        this.bottomNav = 'index'
        break
    }
  },
  data () {
    return {
      bottomNav: 'index'
    }
  },
  computed: mapState({
    title: state => state.title
  }),
  methods: {
    handleChange (val) {
      this.bottomNav = val
      this.$router.push({name: val})
    },
    goback () {
      this.$router.go('-1')
    }
  }
}
</script>
<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}



.index {
  .mu-appbar {
    background-color: #ff4081;
  }
  .mu-bottom-item-active .mu-bottom-item-icon {
    color: #ff4081;
  }

  .mu-bottom-item-active .mu-bottom-item-text {
    color: #ff4081;
  }

  &-container {
    width: 100%;
    position: absolute;
    top: 45px;
    bottom: 56px;
    overflow-y: scroll;
  }
  .mu-paper {
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
  }
}
</style>

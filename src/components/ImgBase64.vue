<template>
  <div class="img-base">
    <div :url="url">url can not load</div>
    <img :src="base64" alt="" style="width:100px;height:100px;" @click="changeBase">
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'search-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeBase () {
      const url = this.url
      const that = this
      axios.get(url)
      .then(rs => {
        console.log('rs', rs)
        const data = rs.data
        let reader = new window.FileReader()
        reader.readAsDataURL(data)
        reader.done = function (readyState, result) {
          that.base64 = result
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
<style lang="less">
@import "../assets/styles/colors.less";

.search-header {
  &-box {
    padding: .6rem .4rem;
    box-shadow: 0 0 30px @pink50;
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
}
</style>

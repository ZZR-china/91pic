<template>
  <div class="album">
      <mu-appbar title="返回" @click.native="goBack">
        <mu-icon-button icon='keyboard_backspace' slot="left"/>
      </mu-appbar>
      <mu-flexbox orient="vertical" class="albums-box" align="center" justify="space-between">
        <mu-flexbox-item v-for="item in pics" :key="item._id" class="albums-box__img">
          <v-img :imgUrl="item.url | pic"></v-img>
        </mu-flexbox-item>
      </mu-flexbox>
  </div>
</template>
<script>
import axios from 'axios'
import {albums} from 'apis'

export default {
  name: 'contain',
  created () {
    const params = this.$route.params
    this.initPics(params.id)
  },
  data () {
    return {
      pics: []
    }
  },
  methods: {
    initPics (id) {
      axios.get(albums.pics(id))
      .then(rs => {
        this.pics = rs.data
      })
      .catch(err => {
        console.error(err)
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/styles/colors.less";

.albums {
  padding: .6rem .6rem;
  &-box {
    background-color: @pink50;
    &__img {
    }
    img {
      width: 100%;
    }
  }
}
</style>

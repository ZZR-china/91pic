<template>
    <div class="nav">
        <mt-header title="">
          <router-link to="index" slot="left">
            <mt-button>妙寄官网首页跳转</mt-button>
          </router-link>
          <mt-button style="width: 3.2rem;" slot="right" @click="actionsheetCotrl"></mt-button>
        </mt-header>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>
<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sheetVisible: false,
      actions: [{
        name: '首页',
        method () {
          // this.$router.push({'path': 'index'})
          window.location = 'index.html?jump=index'
        }
      }, {
        name: 'App下载',
        method () {
          // this.$router.push({'path': 'download'})
          window.location = 'index.html?jump=download'
        }
      }]
    }
  },
  methods: {
    actionsheetCotrl () {
      this.sheetVisible ? this.sheetVisible = false : this.sheetVisible = true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

header.mint-header {
  height: 53px;
  background-color:white;
  padding-left:16px;
  padding-right:17px;
  div.mint-header-button {
    height:45.5px;
  }
  div.mint-header-button.is-left {
    flex:.6;
    background-image: url('../assets/miji_logo.png');
    background-size:80% 80%;
    background-repeat: no-repeat;
    background-position: 5px 4px;
    a {
      color: transparent;
    }
  }
  div.mint-header-button.is-right {
    flex:.2;
    background-image: url('../assets/icon/ico_fun.png');
    background-size:90% 63%;
    background-repeat: no-repeat;
    background-position: 5px 8px;
  }
}


</style>

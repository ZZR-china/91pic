<template>
    <div class="download">
          <img src="../assets/download/pho_bj.png" alt="">
          <div class="download__click">
            <a class="" href="http://www.mijihome.cn/mijihome/miji.apk" title="">
            </a>
          </div>
    </div>
</template>
<script>
export default {
  name: 'download',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.download {
  border-top: 1px solid #ececec;
  padding-top: 6rem;
  text-align: center;
  img {
    width: 60%;
  }
  &__click {
    padding-top: 3rem;
    padding-bottom: 4rem;
    display: block;
    text-align:center;
    a {
      display: inline-block;
      width: 14.6rem;
      height: 6rem;
      background: url('../assets/download/pho_dow.png') no-repeat;
      // background-position: 50% 36%;
      background-size: 100% 100%;
    }
  }
}
</style>

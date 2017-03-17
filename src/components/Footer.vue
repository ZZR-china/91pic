<template>
    <div class="footer">
        <footer>
          <p>上海圈嘀网络科技有限公司(总部)</p>
          <p>地址：上海市长宁区绥宁路998号漫居创业园1楼103室</p>
          <p>&copy;Copyright 2015-2016 All Right reserved 圈嘀科技 &copy;版权所有</p>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'container',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

footer {
  padding-left:10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #333333;
  color: white;
  text-align:left;
  font-size: 12px;
  p {
    margin: 5px 0;
  }
}

</style>

<template>
  <div class="search-header">
    <mu-flexbox class="search-header-box" align="center" justify="space-between">
      <mu-flexbox-item class="search-header-box__icon">
        <mu-icon value="dehaze" :size="34"/>
      </mu-flexbox-item>
      <mu-flexbox-item grow="4" class="search-header-box__input">
        <input class="" :placeholder="title"></input>
      </mu-flexbox-item>
      <mu-flexbox-item class="search-header-box__key">
        <mu-icon value="add" :size="34"/>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>
<script>

export default {
  name: 'search-header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
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

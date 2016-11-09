<template>
<div class="example">
  <div class="example-sidebar">
    <router-link :to="'/'+item" class="example-sidebar__item" v-for="item in navList">
      {{item}}
    </router-link>
  </div>
  <div class="example-container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      navList: ['button', 'panel']
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .example
    width 100%
    display flex
    height 100%
    &-sidebar
      height 100%
      flex 0 1 240px
      flex-direction column
      display flex
      background #4c5667
      &__item
        color #fff
        width 100%
        flex 0 1 60px
        line-height 60px
        text-align center
        text-decoration none
        border-bottom 1px solid rgba(0,0,0,0.2)
        &.router-link-active
          background darken(#4c5667,10%)
          box-shadow inset 0 1px 5px rgba(0,0,0,0.2)
    &-container
      flex 1 1 auto
      padding 20px
      box-shadow 0 0 10px -10px rgba(0,0,0,0.3)
</style>

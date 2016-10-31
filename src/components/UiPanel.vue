<template>
  <div class="panel">
    <slot name="header">Panel Header</slot>
    <div class="panel__body">
      <slot>Panel Body</slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {}
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import "./../styles/index.styl"

  paddingWidth = 25px;

  .panel
    margin-bottom 15px
    background-color #fff
    border 1px solid border
    box-shadow 0 1px 1px rgba(0, 0, 0, .05)
    box-sizing border-box
    &__heading
      color dark
      border-bottom 1px solid border
      padding paddingWidth
    &__body
      padding paddingWidth
</style>
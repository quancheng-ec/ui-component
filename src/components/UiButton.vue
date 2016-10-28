<template>
  <a class="button">
    <slot>{{text}}</slot>
  </a>
</template>

<script type="text/babel">
  import classNames from "classnames"

  export default {
    props: {
      type: {
        type: String,
        default: "normal"
      },
      text: {
        type: String,
        default: "Button"
      },
      icon: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./../styles/variable.styl"

  .button
    font-family basefont
    &--danger
      background danger
</style>


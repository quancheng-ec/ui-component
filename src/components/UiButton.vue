<template>
  <button :class="btnClass">
    <slot>{{text}}</slot>
  </button>
</template>

<script type="text/babel">
  import classNames from "classnames"

  export default {
    props: {
      type: {
        type: [String, Array],
        default: "normal"
      },
      text: {
        type: String,
        default: "Button"
      },
      round: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: null
      },
      iconPosition: {
        type: String,
        default: 'left'
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      btnClass(){
        let btnClasses = "string" === typeof this.type ? this.type.split(" ") : this.type;
        return classNames('button', btnClasses.map(cls => 'button--' + cls));
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./../styles/index.styl"

  .button
    font-family basefont
    font-size 14px
    color #fff
    display inline-block
    padding 6px 12px
    white-space nowrap
    text-align center
    border 1px solid transparent
    user-select none
    cursor pointer
    touch-action manipulation
    -webkit-appearance button
    outline none
    setBasicElementType()
    &:active
      box-shadow inset 0 3px 5px rgba(0,0,0,.125)
    &--block
      display block
      width 100%
</style>


<template>
<div class="cellclass">
  <div class="cell__stage clearfix" @click="onClick">

    <div class="pull-left">
      <div>
        <span class="icon-pic" :class="iconClass" v-if="icon"></span>
        <slot>{{title}}</slot>
        <slot name="sub"></slot>
      </div>
      <div class="text-muted">{{subTitle}}</div>
    </div>

    <div class="pull-right">
      <span class="pull-right text-r" :class="fontColor">{{rightText}}</span>
      <span class="fa fa-angle-right icon-r" v-if="arrow"></span>
    </div>

  </div>

</div>
</template>

<script type='text/babel'>
import classNames from 'classnames'
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'cell',
      require: true
    },
    subTitle: {
      type: String
    },
    arrow: {
      type: Boolean,
      default: false
    },
    rightText: {
      type: String
    },
    color: {
      type: String,
      default: 'text-muted'
    },
    onClick: {
      type: Function,
      default() {}
    }
  },
  computed: {
    iconClass() {
      return classNames('fa', 'fa-' + this.icon)
    },
    fontColor() {
      return classNames('text-' + this.color)
    }
  }
}
</script>


<style lang='stylus' rel='stylesheet/stylus'>
    .cell__stage
      border-top 1px #d9d9d9 solid
      border-bottom 1px #d9d9d9 solid
      margin-bottom 10px
      padding 15px
      min-height 50px
      position relative
      .icon-pic
        padding-right 5px
      .icon-r
        position absolute
        right 10px
        top 50%
        transform translateY(-50%)
        padding-left 10px
      .text-r
        position absolute
        right 25px
        top 50%
        transform translateY(-50%)
</style>

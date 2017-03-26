<template>
  <div class="toastclass">
    <div :class="modalSize"
         ref="modal">
      {{content}}
    </div>
  </div>
</template>

<script type='text/babel'>
import classNames from 'classnames'
export default {
  computed: {
    modalSize() {
      return classNames('toast-modal', 'toast-' + this.size, 'alert', 'alert-' + this.type)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.modal.classList.add('animated', 'fadeIn')
    })
  }
}
</script>


<style lang='stylus' rel="stylesheet/stylus">
  .toastclass
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 9999
    pointer-events none
    .toast-modal
      width 600px
      padding 20px
      position absolute
      top 50%
      left 50%
      color #fff
      transform translate(-50%, -50%)
      animation-duration 200ms!important
      text-align center
      opacity 0
      border-radius 10px
      &.toast-lg
        width 900px
      &.toast-sm
        width 300px
      &.toast-per
        width 90%
</style>

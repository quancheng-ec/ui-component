<script type="text/babel">
export default {
  props: {
    level: {
      type: [String, Number],
      required: true
    }
  },
  render(h) {
    return h('h' + this.level, this.$slots.default)
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
</style>

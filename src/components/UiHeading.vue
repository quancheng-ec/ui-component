<script type="text/babel">
export default {
  props: {
    level: {
      type: [String, Number],
      required: true
    },
    color: {
      type: String,
      default: '#000'
    },
    inset: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const headingStyle = !this.inset ? {
      color: this.color
    } : {
      backgroundColor: this.color,
      color: '#fff'
    }
    return h('h' + this.level, {
      style: headingStyle,
      class: 'heading'
    }, this.$slots.default)
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
.heading
  padding 5px 10px
  margin 0 0 10px 0
</style>

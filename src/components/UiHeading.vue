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


<style lang='stylus' rel='stylesheet/stylus' scoped>
  h1,h2,h3,h4,h5,h6
    margin 0 0

</style>
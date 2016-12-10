<script>
export default {
  props: {
    validationRules: {
      type: [Function, Array, String]
    },
    validationMessages: {
      type: Object
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(1)
    })
  },
  methods: {
    updateValue: function(value) {
      const formattedValue = value.trim()
      if (formattedValue !== value) {
        this.$refs.select.value = formattedValue
      }
      this.$emit('input', formattedValue)
    }
  }
}
</script>

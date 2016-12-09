<script>
export default {
  props: {
    validationRules: {
      type: [Function, Array, String]
    }
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

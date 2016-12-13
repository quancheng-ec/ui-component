<script>
  export default {
    props: {
      validationRules: {
        type: [Function, Array, String]
      },
      validationMessages: {
        type: Object
      }
    },
    methods: {
      updateValue: function(value) {
        const formattedValue = value.trim()
        if (formattedValue !== value) {
          this.$refs.input.value = formattedValue
        }
        this.$emit('input', formattedValue)
      }
    }
  }
</script>

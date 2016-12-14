<script>
  export default {
    props: {
      validationRules: {
        type: [Function, Array, String]
      },
      validationMessages: {
        type: Object
      },
      autoFocus: {
        type: Boolean,
        default: false
      }
    },
    mounted(){
      if (this.autoFocus) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
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

<script>
  export default {
    props: {
      validationRules: {
        type: [Function, Array, String]
      },
      validationMessages: {
        type: Object
      },
      size: {
        type: String
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
    computed: {
      inputSize(){
        return this.size ? 'input-' + this.size : ''
      },
      fontSize(){
        if (!this.size) return ''
        const map = {
          'sm': 'font-12'
        }
        return map[this.size] || ''
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

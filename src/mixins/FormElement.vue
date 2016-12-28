<script>
  import Validator from 'validatorjs'
  Validator.useLang('zh');
  export default {
    data(){
      return {
        valid: true,
        validationErrors: []
      }
    },
    created(){
      this.$root.$on('form:validate', this.validateValue)
      this.$on('input', this.validateValue)
    },
    destroyed(){
      this.$root.$off('form:validate', this.validateValue)
      this.$off('input', this.validateValue)
    },
    props: {
      name: {
        type: String
      },
      validationRules: {
        type: String
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
      updateValue(value) {
        this.$emit('input', value)
      },
      createValidator(value){
        return new Validator({ [this.name || 'field']: value }, {
          [this.name || 'field']: this.validationRules
        })
      },
      validateValue(){
        if (this.validationRules) {
          this.$nextTick(() => {
            const validation = this.createValidator(this.value)
            this.valid = validation.passes()
            this.validationErrors = validation.errors.get(this.name || 'field')
          })
        }
      }
    }
  }
</script>

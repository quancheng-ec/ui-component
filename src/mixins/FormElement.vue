<script>
  import Validator from 'validatorjs'
  import uuid from 'uuid'
  Validator.useLang('zh');
  export default {
    data(){
      return {
        uid: 0,
        parentEventBus: null,
        valid: true,
        validationErrors: []
      }
    },
    created(){
      this.uid = uuid.v1();
      let parent = this.$parent
      while (parent && !parent.eventBus) {
        parent = parent.$parent
      }
      if (!parent.eventBus) return
      this.parentEventBus = parent.eventBus
      this.parentEventBus.$on('form:validate', this.validateValue)
    },
    destroyed(){
      this.parentEventBus && this.parentEventBus.$off('form:validate', this.validateValue)
    },
    props: {
      name: {
        type: String
      },
      eventBus: {},
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
    watch: {
      'value'(){
        this.validateValue()
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
          const validation = this.createValidator(this.value)
          this.valid = validation.passes()
          this.validationErrors = validation.errors.get(this.name || 'field')
          this.parentEventBus.$emit('validate:invalid', {
            id: this.uid, errors: this.validationErrors
          })
        }
        return this.valid
      }
    }
  }
</script>

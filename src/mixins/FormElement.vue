<script>
import Validator from 'validatorjs'
import uuid from 'uuid'
Validator.useLang('zh')

export default {
  data() {
    return {
      uid: 0,
      parentEventBus: null,
      valid: true,
      validationErrors: []
    }
  },
  created() {
    if (this.validationRules) {
      this.uid = uuid.v1()
      let parent = this.$parent
      while (parent && (!parent.eventBus || parent.eventBus.name !== 'validateEventBus')) {
        parent = parent.$parent
      }
      if (!parent.eventBus || parent.eventBus.name !== 'validateEventBus') return
      this.parentEventBus = parent.eventBus
      this.parentEventBus.$on('form:validate', this.validateValue)
      this.parentEventBus.registeredElements.push(this.uid)
    }
  },
  destroyed() {
    if (this.parentEventBus) {
      this.parentEventBus.$off('form:validate', this.validateValue)
      const index = this.parentEventBus.registeredElements.indexOf(this.uid)
      this.parentEventBus.registeredElements.splice(index, 1)
    }
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
    horizontal: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    }
  },
  computed: {
    inputSize() {
      return this.size ? 'input-' + this.size : ''
    },
    fontSize() {
      if (!this.size) return ''
      const map = {
        'sm': 'font-12'
      }
      return map[this.size] || ''
    }
  },
  watch: {
    'value'() {
      this.validateValue()
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
    createValidator(value) {
      return new Validator({ [this.name || this.label || 'field']: value }, {
        [this.name || this.label || 'field']: this.validationRules
      })
    },
    validateValue(batchId) {
      if (this.validationRules) {
        const validation = this.createValidator(this.value)
        validation.passes(() => {
          this.validationErrors = []
          this.valid = true
          if (batchId) {
            this.parentEventBus.$emit('validate:invalid', {
              batchId: batchId,
              id: this.uid,
              errors: this.validationErrors
            })
          }
        })
        validation.fails(() => {
          this.validationErrors = validation.errors.get(this.name || this.label || 'field')
          this.valid = false
          if (batchId) {
            this.parentEventBus.$emit('validate:invalid', {
              batchId: batchId,
              id: this.uid,
              errors: this.validationErrors
            })
          }
        })
      }
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .icon-require
    color #ff0000
    position relative
    top 2px
    left 3px
  .text-placeholder
    color #999  
  .control-label
    &.text-left
      text-align left  

    &.text-center
      text-align center  

    &.text-right
      text-align right
</style>
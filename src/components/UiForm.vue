<template>
  <div :class="formClass">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
import _isEmpty from 'lodash.isempty'
import uuid from 'uuid'

export default {
  data() {
    return {
      eventBus: null,
      errors: {}
    }
  },
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.eventBus = new Vue({
      data() {
        return {
          name: 'validateEventBus',
          registeredElements: [],
          validateQeuery: [],
          validateBatch: 0
        }
      }
    })
    console.log(this.eventBus)
    this.eventBus.$on('validate:invalid', this.addError)
  },
  destroyed() {
    this.eventBus.$destroy()
  },
  computed: {
    formClass() {
      return this.horizontal ? 'form-horizontal' : 'form'
    },
    valid() {
      return _isEmpty(this.errors)
    }
  },
  methods: {
    addError({ batchId, id, errors }) {
      if (batchId !== this.eventBus.validateBatch) return
      if (!errors.length) {
        this.$delete(this.errors, id)
      } else if (!this.errors[id]) {
        this.$set(this.errors, id, errors)
      } else {
        this.errors[id] = errors
      }

      this.eventBus.$emit('validate_back:' + batchId, id)
    },
    validate() {
      this.clearErrors()
      return new Promise((resolve, reject) => {
        const batchId = uuid.v1()
        this.eventBus.validateBatch = batchId
        this.eventBus.validateQeuery = []
        this.eventBus.$on('validate_back:' + batchId, id => {
          this.eventBus.validateQeuery.push(id)
          if (this.eventBus.validateQeuery.length === this.eventBus.registeredElements.length) {
            if (_isEmpty(this.errors)) resolve()
            reject(this.errors)
          }
        })
        this.eventBus.$emit('form:validate', batchId)
      })
    },
    clearErrors() {
      for (const id of Object.keys(this.errors)) {
        this.$delete(this.errors, id)
      }
    }
  }
}
</script>

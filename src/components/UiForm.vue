<template>
  <div>
    <form :class="formClass">
      <slot></slot>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import _isEmpty from 'lodash.isempty'

  export default {
    data(){
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
    created(){
      this.eventBus = new Vue()
      this.eventBus.$on('validate:invalid', this.addError)
    },
    destroyed(){
      this.eventBus.$destroy()
    },
    computed: {
      formClass() {
        return this.horizontal ? 'form-horizontal' : 'form'
      },
      valid(){
        return _isEmpty(this.errors)
      }
    },
    methods: {
      addError({ id, errors }){
        if (!errors.length) return this.$delete(this.errors, id)
        if (!this.errors[id]) {
          this.$set(this.errors, id, errors)
        } else {
          this.errors[id] = errors
        }
      },
      validate(){
        this.clearErrors()
        return new Promise((resolve, reject) => {
          this.eventBus.$emit('form:validate')
          this.$nextTick(() => {
            resolve(this.valid)
          })
        })
      },
      clearErrors(){
        for (const id of Object.keys(this.errors)) {
          this.$delete(this.errors, id)
        }
      }
    }
  }
</script>

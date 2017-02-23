<template>
  <div class="form-group" :class="{'has-error':!valid}">
    <label v-if="label" :class="{'col-sm-3 control-label':horizontal}">{{label}}</label>
    <span class="icon-require" v-if="required">*</span>
    <div :class="{'input-group':$slots.addon,'col-sm-9':horizontal}">
    <span class="input-group-addon" :class="fontSize" v-if="$slots.addon">
      <slot name="addon"></slot>
    </span>
      <select class="form-control" :class="inputSize" ref="input" :value="value"
              @input="updateValue($event.target.value)">
        <option v-for="option in options" :value="option.value" :disabled="option.disabled">
          {{option.text}}
        </option>
      </select>
    </div>

    <span class="help-block text-danger" v-for="error in validationErrors">{{error}}</span>
  </div>
</template>

<script>
  import formElementMixin from './../mixins/FormElement.vue'
  export default {
    mixins: [formElementMixin],
    props: {
      label: {
        type: String
      },
      value: {
        required: true
      },
      options: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style>

</style>

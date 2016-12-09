<template>
<div class="form-group">
  <label v-if="label">{{label}}</label>
  <div :class="{'input-group':$slots.addon}" v-if="!multiLine">
    <span class="input-group-addon" v-if="$slots.addon">
      <slot name="addon"></slot>
    </span>
    <select class="form-control" ref="select" :value="value" @input="updateValue($event.target.value)">
      <option v-for="option in options" :value="option.value">
        {{option.text}}
      </option>
    </select>
  </div>
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

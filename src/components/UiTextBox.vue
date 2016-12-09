<template>
<div class="form-group">
  <label v-if="label">{{label}}</label>
  <div :class="{'input-group':$slots.addon}" v-if="!multiLine">
    <span class="input-group-addon" v-if="$slots.addon">
      <slot name="addon"></slot>
    </span>
    <input class="form-control" ref="input" type="text" :value="value" @input="updateValue($event.target.value)" />
  </div>
  <textarea v-else class="form-control" ref="input" type="text" :value="value" @input="updateValue($event.target.value)">
  </textarea>
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
    placeHolder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      required: true
    },
    multiLine: {
      type: Boolean,
      default: false
    }
  }
}
</script>

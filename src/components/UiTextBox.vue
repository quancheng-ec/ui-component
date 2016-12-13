<template>
  <div class="form-group">
    <label v-if="label">{{label}}</label>

      <div :class="{'input-group':$slots.addon}">
        <span class="input-group-addon" v-if="$slots.addon">
          <slot name="addon"></slot>
        </span>
        <input v-if="!multiLine" class="form-control" :readonly="readonly" :disabled="disabled"
               :placeholder="placeHolder" ref="input"
               :type="type" :value="value"
        />
        <textarea v-else class="form-control" :readonly="readonly" :disabled="disabled" :placeholder="placeHolder"
                  ref="input" :value="value" @input="updateValue($event.target.value)">
        </textarea>
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
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

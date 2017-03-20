<template>
  <div class="form-group"
       :class="{'has-error':!valid}">
    <label v-if="label"
           :class="{'col-sm-3 control-label':horizontal}">{{label}}</label>
    <span class="icon-require"
          v-if="required">*</span>
    <div :class="{'input-group':$slots.addon,'col-sm-9':horizontal}">
      <span class="input-group-addon"
            :class="fontSize"
            v-if="$slots.addon">
              <slot name="addon"></slot>
            </span>
      <template v-if="type == 'date'">
        <div class="form-control"
             :class="inputSize">
          {{value}}
        </div>
      </template>
      <template v-else>
        <input v-if="!multiLine"
               class="form-control"
               :class="inputSize"
               :readonly="readonly"
               :disabled="disabled"
               :placeholder="placeHolder"
               ref="input"
               :type="type"
               :value="value"
               @input="updateValue($event.target.value)" />
        <textarea v-else
                  class="form-control"
                  :readonly="readonly"
                  :disabled="disabled"
                  :placeholder="placeHolder"
                  ref="input"
                  :value="value"
                  @input="updateValue($event.target.value)">
        </textarea>
      </template>
      <span class="input-group-addon"
            :class="fontSize"
            v-if="$slots.otherAddon">
              <slot name="otherAddon"></slot>
            </span>
      <slot></slot>
    </div>
    <span class="help-block text-danger"
          v-for="error in validationErrors">{{error}}</span>
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
    size: {
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
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .icon-require
    color #ff0000
    position relative
    top 2px
    left 3px
</style>
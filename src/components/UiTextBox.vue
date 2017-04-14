<template>
  <div class="form-group"
       :class="{'has-error':!valid}">
    <label v-if="label"
           :class="labelClass">{{label}}
      <span class="icon-require"
            v-if="required">*</span></label>
    <div :class="{'input-group':$slots.addon,'col-sm-9':horizontal}">
      <span class="input-group-addon"
            :class="fontSize"
            v-if="$slots.addon"><slot name="addon"></slot></span>
      <template v-if="type == 'date'">
        <div class="form-control"
             :class="inputSize"
             @click="triggerClick">
          <template v-if="value">{{value}}</template>
          <span v-if="!value"
                class="text-placeholder">{{placeHolder}}</span>
        </div>
      </template>
      <div class="form-control"
           :class="inputSize"
           v-else-if="!editable"
           @click="triggerClick">{{value}}</div>
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
               @click="triggerClick"
               @input="updateValue($event.target.value)" />
        <textarea v-else
                  class="form-control"
                  :readonly="readonly"
                  :disabled="disabled"
                  :placeholder="placeHolder"
                  ref="input"
                  :value="value"
                  @click="triggerClick"
                  @input="updateValue($event.target.value)">
        </textarea>
      </template>
      <span class="input-group-addon"
            :class="fontSize"
            v-if="$slots.otherAddon"> <slot name="otherAddon"></slot></span>
      <slot></slot>
      <span class="help-block text-danger"
            v-for="error in validationErrors">{{error}}</span>
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
    labelAlign: {
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
    editable: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelClass() {
      let className = this.labelAlign ? 'text-' + this.labelAlign : ''
      if (this.horizontal) className += ' col-sm-3 control-label'
      return className
    }
  },
  methods: {
    triggerClick() {
      this.$emit('click')
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
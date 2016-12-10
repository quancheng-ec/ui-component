<template>
<div class="form-group">
  <label v-if="label">{{label}}</label>

  <div v-if="editableStatus">
    <div :class="{'input-group':$slots.addon}" v-if="!multiLine">
      <span class="input-group-addon" v-if="$slots.addon">
        <slot name="addon"></slot>
      </span>
      <input class="form-control" :readonly="readonly" :disabled="disabled" :placeholder="placeHolder" ref="input" :type="type" :value="value" @keyup.enter="editableStatus = false" @input="updateValue($event.target.value)" />
    </div>
    <textarea v-else class="form-control" :readonly="readonly" :disabled="disabled" :placeholder="placeHolder" ref="input" :value="value" @input="updateValue($event.target.value)">
    </textarea>
  </div>

  <div class="form-control diseditabled" @mouseenter="editableBtnShow = true" @mouseleave="editableBtnShow = false" v-else>
    <ui-button class="editable-btn" type="info rounded" v-if="editableBtnShow" :on-click="makeEditable">编辑</ui-button>
    {{value}}
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
  },
  data() {
    return {
      editableBtnShow: false,
      editableStatus: this.editable
    }
  },
  methods: {
    makeEditable() {
      this.editableStatus = true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .form-control
    &.diseditabled
      border 1px solid transparent
      position relative
      .editable-btn
        position absolute
        right 0
        top 0

</style>

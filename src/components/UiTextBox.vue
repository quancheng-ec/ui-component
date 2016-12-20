<template>
  <div class="form-group">
    <label v-if="label">{{label}}</label>

    <div :class="{'input-group':$slots.addon}">
        <span class="input-group-addon" :class="fontSize" v-if="$slots.addon">
          <slot name="addon"></slot>
        </span>
      <template v-if="type == 'date'">
        <div class="form-control" :class="inputSize">
          {{value}}
        </div>
      </template>
      <template v-else>
        <input v-if="!multiLine" class="form-control" :class="inputSize" :readonly="readonly" :disabled="disabled"
               :placeholder="placeHolder" ref="input"
               :type="type" :value="value" @input="updateValue($event.target.value)"
        />
        <textarea v-else class="form-control" :readonly="readonly" :disabled="disabled" :placeholder="placeHolder"
                  ref="input" :value="value" @input="updateValue($event.target.value)">
        </textarea>
      </template>
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
      }
    }
  }
</script>

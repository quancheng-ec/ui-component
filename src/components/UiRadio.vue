<template>
  <div :class="{'ui-radio_inline':inline}">
    <label class="radio ui-radio_label" :class="radioClass">
      <input type="radio" :name="name" :disabled="disabled" :value="inputValue" @change="updateValue($event.target)" :checked="value == inputValue">
      <label></label>
      <slot>{{label}}</slot>
    </label>
  </div>
</template>

<script>
  import classNames from 'classnames'
  export default {
    data(){
      return {
      }
    },
    props: {
      type: {
        type: [String, Array]
      },
      value: {
      },
      inline: {
        type: Boolean,
        default: false
      },
      label: {
        type : String,
        default : ''
      },
      inputValue: {
        type: String,
        default : ''
      },
      disabled:{
        type : Boolean,
        default : false
      },
      name: {
        type: String,
        default : ''
      }
    },
    created(){
    },
    computed: {
      radioClass() {
        const Classes = (typeof this.type === 'string' ? this.type.split(' ') : this.type)
        return classNames(Classes.map(cls => 'radio-' + cls));
      }
    },
    methods: {
      updateValue(target){
        this.$emit('input', target.value)
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .ui-radio_label
    display inline-flex
    align-items center
    cursor pointer
  .ui-radio_inline
    display inline-block
</style>
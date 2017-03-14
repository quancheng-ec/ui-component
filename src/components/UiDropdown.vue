<template>
  <label class="checkbox ui-checkbox_label" :class="checkboxClass">
    <input type="checkbox" :name="name" :disabled="disabled" :value="inputValue" @change="updateValue($event.target)" :checked="value">
    <label></label>
    <slot>{{label}}</slot>
  </label>
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
      checkboxClass() {
        const Classes = this.type?(typeof this.type === 'string' ? this.type.split(' ') : this.type):[];
        return classNames(Classes.map(cls => 'checkbox-' + cls));
      }
    },
    methods: {
      updateValue(target){
        this.$emit('input', target.checked)
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .ui-checkbox_label
    display inline-flex
    align-items center
    cursor pointer
    & input[type=checkbox]
      zoom 150%
      margin 0
      left 0
      top 0
</style>
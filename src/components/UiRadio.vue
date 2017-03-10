<template>
  <label class="radio ui-radio_label" :class="radioClass">
    <input type="radio" :name="name" :disabled="disabled" :value="inputValue" @change="updateValue($event.target)" :checked="value == inputValue">
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
      radioClass() {
        const Classes = this.type?(typeof this.type === 'string' ? this.type.split(' ') : this.type):[];
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
    & input[type=checkbox]
      zoom 150%
      margin 0
      left 0
      top 0
</style>
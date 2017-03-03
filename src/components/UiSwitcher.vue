<template>
  <div>
    <input type="checkbox" :checked="isChecked" class="js-switch" style="display: none;">
    <span class="switchery switchery-small bg-transition"
          @click="toggleCheckBox"
          :style="styleMap.bg[this.value?'checked':'unchecked']"
    >
    <small class="btn-transition" :style="styleMap.btn[this.value?'checked':'unchecked']"></small></span>
  </div>
</template>

<script>
  const styleMap = {
    bg: {
      checked: {
        backgroundColor: '#03a9f3',
        borderColor: '#03a9f3',
        boxShadow: '#03a9f3 0px 0px 0px 11px inset'
      },
      unchecked: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(223, 223, 223)',
        boxShadow: 'rgb(223, 223, 223) 0px 0px 0px 16px inset'
      }
    },
    btn: {
      checked: {
        left: '13px',
        backgroundColor: '#fff'
      },
      unchecked: {
        left: '0',
        backgroundColor: '#fff'
      }
    }
  }
  export default {
    data(){
      return {
        styleMap
      }
    },
    computed: {
      isChecked(){
        return this.value ? 'checked' : ''
      }
    },
    props: {
      size: {
        type: String,
        default: 'default'
      },
      value: Boolean
    },
    methods: {
      toggleCheckBox(){
        this.$emit('input', !this.value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bg-transition
    transition border 0.4s, box-shadow 0.4s, background-color 1.2s

  .btn-transition
    transition background-color 0.4s, left 0.2s
</style>
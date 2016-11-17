<template>
    <div :class="itemClass">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      space: {
        type: [String, Number],
        required: true
      },
      offset: {
        type: [String, Number],
        default: 0
      }
    },
    computed: {
      itemClass(){
        return 'col-sm-' + this.space
      }
    }
  }
</script>

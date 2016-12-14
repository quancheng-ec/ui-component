<template>
<div>
  <form :class="formClass">
    <slot></slot>
  </form>
</div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formClass() {
      return this.horizontal ? 'form-horizontal' : 'form'
    }
  }
}
</script>

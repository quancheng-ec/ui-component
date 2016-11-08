<template>
<div class="grid__group grid__group--gutter">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .grid__group
    display flex
    padding 5px 0
    &--gutter
      .grid__item:not(:last-child)
        margin-right 8px
</style>

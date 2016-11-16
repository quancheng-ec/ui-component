<template>
    <div class="row">
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

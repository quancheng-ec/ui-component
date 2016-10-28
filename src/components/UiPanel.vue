<template>
  <div class="white-box">
    <slot name="header">Panel Header</slot>
    <slot>Panel Body</slot>
    <slot name="footer">Panel Footer</slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props:{

    }
  }
</script>
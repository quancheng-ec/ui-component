<template>
  <div>
    <ui-switcher v-model="checked"></ui-switcher>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        checked: true
      }
    }

  }
</script>
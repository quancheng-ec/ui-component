<template>
  <div>
    this is a demo for UI Components.
    <ui-button></ui-button>
  </div>
</template>

<script type="text/babel">
  import UiButton from "components/Button"

  export default {
    components:{
      UiButton
    },
    mounted(){
      console.log(1)
    }
  }
</script>
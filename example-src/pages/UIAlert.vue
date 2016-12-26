<template>
  <div>
    <a @click="openConfirm">test</a>
  </div>
</template>
<script>
  export default {
    methods: {
      openConfirm(){
        this.$alertBox({
          content: '这是一个alert box'
        })
          .then(res => console.log('confirmed---', res))
      }
    }
  }
</script>
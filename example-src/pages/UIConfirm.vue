<template>
  <div>
    <a @click="openConfirm">test</a>
  </div>
</template>
<script>
  export default {
    methods: {
      openConfirm(){
        this.$confirmBox({
          title: '请确认',
          content: '这是一个confirm box'
        })
          .then(res => console.log('confirmed---', res))
          .catch(e => console.log('canceled---', e))
      }
    }
  }
</script>
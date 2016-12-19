<template>
  <ui-date-picker v-model="date" addon="选择日期" :range="true"></ui-date-picker>
</template>

<script>
  export default {
    data(){
      return {
        date: ['2016-10-16','2016-10-20']
      }
    }
  }
</script>
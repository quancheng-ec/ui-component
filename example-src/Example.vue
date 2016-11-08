<template>
<div class="example-sidebar">
  <ul>
    <li v-for="item in navList">
      <router-link :to="'/'+item">/</router-link>
    </li>
  </ul>
</div>
<div class="example-container">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      navList: ['button']
    }
  }
}
</script>

<style lang="css">
</style>

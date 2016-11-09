<template>
<div class="demo-page">
  <ui-heading :level="1">UIHeading</ui-heading>
  <ui-grid-group>
    <ui-grid-item>
      <ui-panel>
        <div class="panel__heading" slot="header">
          Default heading
        </div>
        <ui-heading :level="level" v-for="level in [1,2,3,4,5]">heading level:{{level}}</ui-heading>
      </ui-panel>
    </ui-grid-item>
    <ui-grid-item>
      <ui-panel>
        <div class="panel__heading" slot="header">
          Inset heading
        </div>
        <ui-heading :level="level" inset v-for="level in [1,2,3,4,5]">heading level:{{level}}</ui-heading>
      </ui-panel>
    </ui-grid-item>
  </ui-grid-group>
</div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

</style>

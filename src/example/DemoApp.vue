<template>
  <div class="demo-page">
    <ui-panel>
      <div class="panel__heading" slot="header">
        UI-Button
      </div>
      <ui-grid-group>
        <ui-grid-item v-for="type in ['primary','success','danger','warning','info']">
          <ui-button :type="[type,'block']">
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
    </ui-panel>
  </div>
</template>

<script type="text/babel">
  import UiButton from "components/UiButton"
  import UiPanel from "components/UiPanel"
  import UiGridGroup from "components/UiGridGroup"
  import UiGridItem from "components/UiGridItem"

  export default {
    components: {
      UiButton, UiPanel, UiGridGroup, UiGridItem
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  body
    margin 0
    padding 0
    background #ededed

  .demo-page
    padding 25px
</style>
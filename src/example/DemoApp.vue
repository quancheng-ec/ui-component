<template>
  <div class="demo-page">
    <ui-panel>
      <div class="panel__heading" slot="header">
        按钮组件
      </div>
      <ui-heading :level="3">常规按钮</ui-heading>
      <ui-grid-group>
        <ui-grid-item v-for="type in ['primary','success','danger','warning','info']">
          <ui-button :type="[type,'block']">
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
      <ui-heading :level="3">圆角按钮</ui-heading>
      <ui-grid-group>
        <ui-grid-item v-for="type in ['primary','success','danger','warning','info']">
          <ui-button :type="[type,'block','rounded']">
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
  import UiHeading from "components/UiHeading"

  export default {
    components: {
      UiButton, UiPanel, UiGridGroup, UiGridItem,UiHeading
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
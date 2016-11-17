<template>
    <div>
        <ui-panel>
            <h3>栅格系统</h3>
            <ui-grid-group class="grid-group-demo">
                <ui-grid-item space="1" v-for="i in createArray(12)">
                    col-1
                </ui-grid-item>
            </ui-grid-group>
            <ui-grid-group class="grid-group-demo">
                <ui-grid-item space="4" v-for="i in createArray(3)">
                    col-4
                </ui-grid-item>
            </ui-grid-group>
            <ui-grid-group class="grid-group-demo">
                <ui-grid-item space="8">
                    col-8
                </ui-grid-item>
                <ui-grid-item space="4">
                    col-4
                </ui-grid-item>
            </ui-grid-group>
            <div slot="footer">
                <ui-button type="rounded danger">GET CODE</ui-button>
            </div>
        </ui-panel>
    </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      createArray(len = 1){
        return new Array(len)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .grid-group-demo
        text-align center
        margin 10px 0
        & > div
            padding 10px 0
            border 1px solid rgba(120, 130, 140, 0.13)
            background-color #f7fafc
</style>
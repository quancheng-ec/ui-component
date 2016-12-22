<template>
    <div class="example">
        <div class="example-sidebar">
            <router-link :to="'/'+item" class="example-sidebar__item" v-for="item in navList">
                {{item}}
            </router-link>
        </div>
        <div class="example-container">
            <ui-grid-group class="example-pagenav">
                <ui-grid-item space="9">
                    <h4>{{pageName}}</h4>
                </ui-grid-item>
            </ui-grid-group>
            <router-view class="container-fluid"></router-view>
        </div>
    </div>
</template>

<script>
  import {
    pages
  } from './pages'
  export default {
    data() {
      return {
        navList: pages
      }
    },
    computed: {
      pageName(){
        return this.$route.name || this.$route.path.substring(1, this.$route.path.length)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    .example
        width 100%
        display flex
        height auto
        min-height 100%
        &-sidebar
            height auto
            flex 0 0 160px
            flex-direction column
            display flex
            background #4c5667
            &__item
                color #fff
                width 100%
                flex 0 1 60px
                line-height 60px
                text-align center
                text-decoration none
                border-bottom 1px solid rgba(0, 0, 0, 0.2)
                &.router-link-active
                    background darken(#4c5667, 10%)
                    box-shadow inset 0 1px 5px rgba(0, 0, 0, 0.2)
        &-container
            background #edf1f5
            flex 1 1 auto
            overflow auto
            box-shadow 0 0 10px -10px rgba(0, 0, 0, 0.3)
            .container-fluid
                margin-top 20px
        &-pagenav
            background #fff
            padding 10px 30px

    .panel
        .panel-body
            h3:not(:first-child)
                margin-top 30px !important

</style>

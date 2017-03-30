<template>
  <div style="position:relative"
       :style="{zIndex:listShow?10:9}">
    <ui-text-box v-model="text"
                 :horizontal="options.horizontal"
                 :place-holder="options.placeholder"
                 :label="options.label"
                 :editable="false"
                 @click="listShow = true">
      <div v-if="listShow"
           class="dropdown-list">
        <div class="in dropdown-content">
          <slot></slot>
        </div>
      </div>
    </ui-text-box>
  </div>
</template>

<script>

import EventListener from '../libs/EventListener.es6.js'
export default {
  data() {
    return {
      listShow: false,
      chosenList: [],
      chosen: {},
      search: ''
    }
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    text: {},
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    'listShow'(val) {
      if (val) this.$emit('list-show')
    }
  },
  created() {
    if (!document) return
    this._closeEvent = EventListener.listen(document, 'click', e => {
      if (this.listShow === false) return
      if (!this.$el.contains(e.target)) {
        this.listShow = false
      }
    })
  },
  beforeDestroy() {
    if (this._closeEvent) this._closeEvent.remove()
  }
}
</script>

<style lang="stylus">

  .dropdown-list
    position absolute
    width 100%
    padding-right 15px
  .dropdown-content
    width 100%
    padding 10px
    background #fff
    border 1px solid #e6e6e6
    box-shadow 3px 5px 10px 1px rgba(0,0,0,0.1)
    overflow auto
    max-height 200px
    .list-group
      margin-top 10px
    //   overflow auto
    //   max-height 200px
</style>
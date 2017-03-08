<template>
  <div>
    <ui-text-box
      v-if="groupTree"
      :horizontal="horizontal"
      v-model="text"
      place-holder="请选择"
      :label="label"
      validation-rules="required"
    >
      <div class="form-control tree-panel__mask text-right"
           @click.self="showTreePanel">
        <i class="fa" :class="treePanel.show?'fa-angle-up':'fa-angle-down'"></i>
      </div>
      <div class="tree-panel" v-if="treePanel.show">
        <fk-department
          :department-data="groupTree"
          :event-bus="eventBus"
          :level="deptLevel"
          :need-account="needAccount"
          :url="url"
        ></fk-department>
      </div>
    </ui-text-box>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    data(){
      return {
        treePanel: {
          show: false
        },
        remoteTree: { children: [] },
        text: '',
        deptLevel: 1,
        eventBus: new Vue()
      }
    },
    props: {
      'tree': {},
      'value': {},
      'dataKey': {},
      type: { default: 'structure' },
      'horizontal': {},
      label: {},
      url: {
        type: String,
        default: '/api/enterprise/pickerData'
      },
      needAccount: {
        type: Boolean,
        default: true
      },
      accountOnly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      groupTree(){
        return this.tree || this.remoteTree
      }
    },
    created(){
      this.eventBus.$on('item:chosen', ({ type, data }) => {
        if (type !== 'account' && this.accountOnly) return
        this.treePanel.show = false
        this.text = data.name || data.cnName
        this.$emit('input', data[this.dataKey])
      })
      this.eventBus.$on('drag:end', () => {
        console.log(1)
      })
    },
    mounted(){
      this.$http.get(this.url, {
        params: {
          items: this.type
        }
      }).then(res => this.remoteTree = res.data.data[this.type])
    },
    methods: {
      showTreePanel(e){
        this.treePanel.show = !this.treePanel.show
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tree-panel__mask
    position absolute
    top 0
    left 0
    background transparent
    border 0
</style>
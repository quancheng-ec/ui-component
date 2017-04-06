<template>
  <div>
    <ui-modal v-model="show"
              size="lg"
              :title="title"
              showCloseButton
              bgColor="blue"
              textPosition="center"
              @input="updateShow">
      <ui-grid-group slot="content">
        <ui-grid-item :space="6">
          <slot name="desc">
            <p>
              以下范围内的分公司，部门，项目，员工可看到该费用类型
            </p>
            <p class="text-muted">默认全部员工可见，需要修改请从右边选择部门，项目和人员</p>
          </slot>
          <div class="label-group">
            <span class="label label-rounded label-info label-outline"
                  v-for="chosen,index in chosenList">{{chosen.name}} <i class="fa fa-remove" @click="chosenList.splice(index,1)"></i></span>
          </div>
        </ui-grid-item>
        <ui-grid-item :space="6">
          <div class="tree-panel"
               v-for="item in items">
            <p>{{ labelMap[item] }}：</p>
            <fk-department :department-data="trees[item]"
                           :type="item"
                           :level="1"
                           :event-bus="eventBus"
                           :url="url"
                           :account-only="item === 'account'"
                           :need-account="item === 'account'"></fk-department>
          </div>
        </ui-grid-item>
      </ui-grid-group>
      <div slot="foot-btn">
        <ui-button type="info"
                   @click.native="closeModal('save')">保存</ui-button>
        <ui-button type="info outline"
                   @click.native="closeModal('cancel')">取消</ui-button>
      </div>
    </ui-modal>
  </div>
</template>

<script>
import { find } from 'lodash'
import Vue from 'vue'
const labelMap = {
  structure: '部门',
  costcenter: '成本中心',
  project: '项目',
  account: '员工'
}
export default {
  data() {
    const trees = {}
    this.items.map(item => trees[item] = { children: [] })

    return {
      trees: trees,
      labelMap,
      eventBus: new Vue()
    }
  },
  props: {
    items: {
      type: Array,
      default: () => ['structure', 'project']
    },
    title: {
      type: String
    },
    url: {
      type: String,
      default: '/api/enterprise/pickerData'
    },
    value: {
      type: Boolean
    },
    chosenList: {
      type: Array,
      require: true
    },
    companyId: {
      default: '20170113105245001'
    },
    onSave: {},
    onCancel: {}
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(v) {
        this.updateShow(v)
      }
    }
  },
  created() {
    this.eventBus.$on('item:chosen', this.onChosen)
  },
  mounted() {
    this.$http.get(this.url, {
      params: {
        items: this.items.join(',')
      },
      headers: {
        companyid: this.companyId
      }
    }).then(this.setData)
  },
  methods: {
    updateShow(s) {
      this.$emit('input', s)
    },
    setData(res) {
      this.trees = res.data.data
    },
    onChosen(item) {
      console.log(item)
      const { type, data } = item
      const result = { type }
      if (type === 'account') {
        result.id = data.accountId
      } else {
        result.id = data.departmentId || data.groupId
      }
      result.name = data.cnName || data.name
      if (find(this.chosenList, { id: result.id })) {
        return this.$toastBox({
          content: '重复',
          size: 'sm',
          type: 'danger'
        })
      }
      this.chosenList.push(result)
    },
    closeModal(type) {
      if (type) {
        const method = `on${firstUpperCase(type)}`

        if (this[method]) {
          if (this[method] instanceof Promise) {
            return this[method]().then(() => this.show = false)
          }
          this[method]()
          return this.show = false
        }
      }
      return this.show = false

      function firstUpperCase(str) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .label-group
    .label
      display inline-block
      margin 5px

  .tree-panel
    margin-bottom 10px
    padding 10px
    border 1px solid rgba(0, 0, 0, 0.1)
</style>

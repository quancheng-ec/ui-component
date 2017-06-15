<template>
  <div>
    <ui-modal v-model="show"
              size="lg"
              :title="title"
              showCloseButton
              bgColor="blue"
              textPosition="center"
              :append-el="appendEl"
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
                  v-for="chosen,index in chosenList">{{chosen.name}}
              <i class="fa fa-remove"
                 @click="chosenList.splice(index,1)"></i>
            </span>
          </div>
        </ui-grid-item>
        <ui-grid-item :space="6">
          <div class="tree-panel">
            <ul class="nav customtab nav-tabs"
                role="tablist"
                style="margin-bottom:10px">
              <li role="presentation"
                  :class="{'active':panelShow === item}"
                  v-for="item in items"
                  @click="panelShow = item">
                <a role="tab"
                   style="cursor:pointer"
                   data-toggle="tab"
                   aria-expanded="true">
                  <span class="visible-xs">
                    <i class="ti-home"></i>
                  </span>
                  <span class="hidden-xs">{{labelMap[item][globalLang]}}</span>
                </a>
              </li>
            </ul>
            <div v-for="item in items"
                 v-if="item === panelShow">
              <!--<fk-department :department-data="trees[item]"
                                           v-if="item === 'account'"
                                           :type="item"
                                           :level="1"
                                           :event-bus="eventBus"
                                           :account-only="item === 'account'"
                                           :need-account="item === 'account'"></fk-department>-->
              <fk-tree :type="item"
                       @item:change="onChosen"></fk-tree>
            </div>
          </div>
        </ui-grid-item>
      </ui-grid-group>
      <div slot="foot-btn">
        <ui-button type="info"
                   @click.native="closeModal('save')">{{globalLang === 'zh'?'保存':'Save'}}</ui-button>
        <ui-button type="info outline"
                   @click.native="closeModal('cancel')">{{globalLang === 'zh'?'取消':'Cancel'}}</ui-button>
      </div>
    </ui-modal>
  </div>
</template>

<script>
import { find, remove } from 'lodash'
import FkMixin from '../mixins/FkMixin.vue'
import Vue from 'vue'
const labelMap = {
  structure: {
    zh: '部门',
    en: 'Departments'
  },
  costcenter: {
    zh: '成本中心',
    en: 'Costcenters'
  },
  project: {
    zh: '项目',
    en: 'Projects'
  },
  account: {
    zh: '员工',
    en: 'Employees'
  }
}
export default {
  data() {
    return {
      panelShow: '',
      trees: {
        structure: { children: [] },
        account: { children: [] },
        project: { children: [] },
        costcenter: { children: [] }
      },
      labelMap,
      eventBus: new Vue()
    }
  },
  mixins: [FkMixin],
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
    single: {
      type: Boolean,
      default: false
    },
    onSave: {},
    onCancel: {},
    appendEl: {}
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
    this.panelShow = this.items[0]
    //this.loadData()
  },
  watch: {
    items(newVal, oldVal) {
      if (newVal.join(',') === oldVal.join(',')) return
      console.log('trigger items watcher')
      this.loadData()
    },
    companyId() {
      console.log('trigger companyId watcher')
      this.loadData()
    }
  },
  methods: {
    loadData() {
      return this.$http.get(this.remote_domain + '/api/enterprise/pickerData', {
        params: {
          items: this.items.join(',')
        },
        headers: {
          companyid: this.companyId
        }
      }).then(this.setData)
    },
    updateShow(s) {
      this.$emit('input', s)
    },
    setData(res) {
      this.trees = res.data.data
    },
    onChosen(item) {
      console.log(item)
      const { type, data } = item
      const result = { type, data }
      if (type === 'account') {
        result.id = data.accountId
      } else {
        result.id = data.departmentId || data.groupId
      }
      result.name = data.cnName || data.name

      if (find(this.chosenList, { id: result.id })) {
        return this.$toastBox({
          content: this.golbalLang === 'zh' ? '重复' : 'Duplicated',
          size: 'sm',
          type: 'danger'
        })
      }
      if (this.single) {
        remove(this.chosenList, item => item.type === result.type)
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

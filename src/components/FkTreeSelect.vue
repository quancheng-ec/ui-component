<template>
  <div>
    <ui-picker :text="text"
               :required="required"
               :options="{horizontal,label,placeholder:globalLang === 'zh'?'请选择':'Select One...',labelAlign}"
               :validation-rules="validationRules"
               ref="picker">
      <div class="tree-panel">
        <form role="search"
              class="app-search hidden-xs"
              @submit.prevent>
          <input v-model="search"
                 :placeholder="globalLang === 'zh'?'搜索'+searchHint:'Search Employee'"
                 class="form-control"
                 ref="input">
          <a class="active"
             @click="searchGroup">
            <i class="fa fa-search"></i>
          </a>
        </form>
        <fk-department :department-data="groupTree"
                       :event-bus="eventBus"
                       :level="deptLevel"
                       v-if="!search"
                       :need-account="type === 'account'"
                       :url="url"></fk-department>
        <div class="list-group">
          <a class="list-group-item"
             v-for="item in searchList"
             :key="item.groupId"
             @click="choseItem(item)">
            <i class="fa fa-sitemap"></i>
            {{item.name}}
          </a>
        </div>
      </div>
    </ui-picker>
  </div>
</template>

<script>
import UiPicker from './UiPicker.vue'
import FkMixin from '../mixins/FkMixin.vue'
import Vue from 'vue'
import { debounce } from 'lodash'
export default {
  data() {
    return {
      search: '',
      searchList: [],
      treePanel: {
        show: false
      },
      remoteTree: { children: [] },
      text: '',
      deptLevel: 1,
      eventBus: new Vue()
    }
  },
  watch: {
    'value'(v) {
      console.log(v)
      if (v == '') this.text = ''
    },
    'search'(kw) {
      if (kw == '') {
        return this.searchList = []
      }
      this.searchGroup()
    }
  },
  props: {
    required: {
      type: Boolean
    },
    tree: {},
    value: {},
    type: { default: 'structure' }, // structure,project,costcenter,account
    horizontal: {},
    label: {},
    labelAlign: {},
    validationRules: {},
    options: {
      default: () => {
        return {}
      }
    },
    needDefault: {
      type: Boolean,
      default: false
    },
    dataKey: {},
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
  mixins: [FkMixin],
  components: { UiPicker },
  computed: {
    groupTree() {
      return this.tree || this.remoteTree
    },
    searchHint() {
      switch (this.type) {
        case 'structure':
          return '部门'
        case 'project':
          return '项目'
        case 'costcenter':
          return '成本中心'
        default:
          return ''
      }
    }
  },
  created() {
    this.eventBus.$on('item:chosen', ({ type, data }) => {
      if (type !== 'account' && this.accountOnly) return
      this.$refs.picker.listShow = false
      this.text = data.name || data.cnName
      this.$emit('item:change', { type, data })
      this.$emit('input', this.findKey(data))
    })
    this.eventBus.$on('drag:end', () => {
      console.log('drag:end')
    })
  },
  mounted() {
    this.loadTree().then(tree => {
      if (this.needDefault) {
        console.log(tree)
        this.text = tree.name || tree.cnName
        this.$emit('item:change', { type: this.type, data: tree })
        this.$emit('input', this.findKey(tree))
      }
    })
  },
  methods: {
    choseItem(item) {
      this.eventBus.$emit('item:chosen', {
        type: this.type,
        data: item
      })
    },
    searchGroup: debounce(function() {
      return this.$http.get(this.remote_domain + '/api/group/get', {
        params: {
          type: this.type,
          search: this.search,
          companyId: this.options.companyId
        }
      }).then(res => {
        this.searchList = res.data.data.groups
      })
    }, 300),
    loadTree() {
      if (this.search) {
        return this.$http.get(this.remote_domain + '/api/group/get', {
          params: {
            type: this.type,
            search: this.search,
            companyId: this.options.companyId
          }
        }).then(res => {
          this.searchList = res.data.data.groups
        })
      }
      const defaults = []
      if (this.value) {
        defaults.push({
          id: this.value,
          type: this.type
        })
      }
      return this.$http.get(this.remote_domain + '/api/enterprise/pickerData', {
        params: {
          items: this.type,
          companyId: this.options.companyId,
          defaults: JSON.stringify(defaults)
        }
      }).then(res => {
        const resData = res.data.data
        this.text = resData.defaults.length ? resData.defaults[0].name : ''
        this.remoteTree = res.data.data[this.type]
        return res.data.data[this.type]
      })
    },
    findKey(data) {
      let result
      for (const id of ['accountId', 'groupId', 'departmentId']) {
        if (data.hasOwnProperty(id)) {
          result = data[id]
          break
        }
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-search {
  width: 100%;

  .form-control, .form-control:focus {
    width: 100%;
  }
}
</style>

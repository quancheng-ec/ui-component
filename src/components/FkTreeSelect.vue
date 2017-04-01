<template>
  <div>
    <ui-picker :text="text"
               :options="{horizontal,label,placeholder:'请选择'}"
               ref="picker">
      <div class="tree-panel">
        <fk-department :department-data="groupTree"
                       :event-bus="eventBus"
                       :level="deptLevel"
                       :need-account="type === 'account'"
                       :url="url"></fk-department>
      </div>
    </ui-picker>
  </div>
</template>

<script>
import UiPicker from './UiPicker.vue'
import FkMixin from '../mixins/FkMixin.vue'
import Vue from 'vue'
export default {
  data() {
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
    tree: {},
    value: {},
    type: { default: 'structure' }, // structure,project,costcenter,account
    horizontal: {},
    label: {},
    options: {
      default: () => {
        return {}
      }
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
      console.log(1)
    })
  },
  mounted() {
    this.loadTree()
  },
  methods: {
    loadTree() {
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
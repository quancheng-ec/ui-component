<template>
  <div>
    <fk-department :department-data="remoteTree"
                   :event-bus="eventBus"
                   :level="deptLevel"></fk-department>
  </div>
</template>

<script>
import Vue from 'vue'
import FkMixin from '../mixins/FkMixin.vue'
export default {
  data() {
    return {
      remoteTree: { children: [] },
      deptLevel: 1,
      eventBus: new Vue()
    }
  },
  props: {
    type: { default: 'structure' },
    options: {
      default: () => {
        return {}
      }
    }
  },
  mixins: [FkMixin],
  created() {
    this.eventBus.$on('item:chosen', ({ type, data }) => {
      this.$emit('item:change', { type, data })
    })
  },

  mounted() {
    this.loadTree()
  },
  methods: {
    loadTree() {
      return this.$http.get(this.remote_domain + '/api/enterprise/pickerData', {
        params: {
          items: this.type,
          companyId: this.options.companyId
        }
      }).then(res => {
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
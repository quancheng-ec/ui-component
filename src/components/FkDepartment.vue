<template>
  <ol class="dd-list">
    <li class="dd-item">
      <button :data-action="collapsedType"
              type="button"
              @click="toggleCollapsed"
              v-if="departmentData.children.length">
        Collapse
  
      </button>
      <div class="dd-handle"
           @click="chooseItem(departmentData,type)">
        <i class="fa fa-sitemap"></i> {{departmentData.name}}
  
      </div>
      <div v-for="account in accounts">
        <ol class="dd-list">
          <li class="dd-item">
            <div class="dd-handle"
                 @click="chooseItem(account,'account')">
              <i class="fa fa-user"></i> {{account.cnName}}
  
            </div>
          </li>
        </ol>
      </div>
      <div v-if="departmentData.children.length && !departmentData.isCollapsed">
        <draggable :list="departmentData.children"
                   @change="onEnd">
          <fk-department :department-data="dept"
                         :need-account="needAccount"
                         :account-only="accountOnly"
                         v-for="dept in departmentData.children"
                         :event-bus="eventBus"
                         :level="level+1"
                         :type="type"
                         :url="url">
          </fk-department>
        </draggable>
      </div>
    </li>
  </ol>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'fk-department',
  data() {
    return {
      accounts: []
    }
  },
  props: {
    'departmentData': {},
    'eventBus': {},
    'level': {},
    type: {
      type: String,
      default: 'structure'
    },
    needAccount: {
      type: Boolean,
      default: true
    },
    accountOnly: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: '/api/enterprise/pickerData'
    }
  },
  components: {
    draggable
  },
  computed: {
    collapsedType() {
      return this.departmentData.isCollapsed ? 'expand' : 'collapse'
    }
  },
  mounted() {
    console.log(1)
    this.loadAccountofGroup()
  },
  methods: {
    toggleCollapsed() {
      this.departmentData.isCollapsed = !this.departmentData.isCollapsed
      this.loadAccountofGroup()
    },
    loadAccountofGroup() {
      if (!this.needAccount) return
      //  if (!this.departmentData.isCollapsed) {
      this.$http.get(this.url, {
        params: {
          groupId: this.departmentData.departmentId,
          accountOnly: true
        }
      }).then(res => {
        this.accounts = res.data.data.accounts
      })
      //  }
    },
    chooseItem(item, type) {
      if (this.accountOnly && type !== 'account') return
      if (!type) console.log(item)
      this.eventBus.$emit('item:chosen', {
        type,
        data: item
      })
    },
    chooseDepartment(group) {
      this.eventBus.$emit('group:chosen', group)
    },
    chooseAccount(account) {
      this.eventBus.$emit('account:chosen', account)
    },
    onEnd(evt) {
      console.log(evt)
      this.eventBus.$emit('drag:end', evt)
    }
  }
}
</script>

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
           @click="chooseItem(departmentData,type === 'account'?'structure':type)">
        <i class="fa fa-sitemap"></i> {{departmentData.name}}
        <i v-if="departmentData.children.length" @click="selectAll($event,departmentData,type === 'account'?'structure':type)" class="fa-select-all fa fa-plus-square"></i>
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
      <div v-if="departmentData.children.length && !isCollapsed">
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
import FkMixin from '../mixins/FkMixin.vue'
import draggable from 'vuedraggable'
export default {
  name: 'fk-department',
  mixins: [FkMixin],
  data() {
    return {
      isCollapsed: true,
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
      return this.isCollapsed ? 'expand' : 'collapse'
    }
  },
  mounted() {
    this.isCollapsed = this.level > 1
    this.loadAccountofGroup()
  },
  methods: {
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed
      this.loadAccountofGroup()
    },
    loadAccountofGroup() {
      if (!this.needAccount) return
      //  if (!this.isCollapsed) {
      this.$http.get(this.remote_domain + '/api/enterprise/pickerData', {
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
        data: JSON.parse(JSON.stringify(item))
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
    },
    selectAll(event, item, type){
      event.stopPropagation();
      if (this.accountOnly && type !== 'account') return
      if (!type) console.log(item)
      let all = [{
        type,
        data: JSON.parse(JSON.stringify(item))
      }]
      var f = function(children){
        if(children.children && children.children.length){
          children.children.map(child=>{
            all.push({
              type,
              data: JSON.parse(JSON.stringify(child))
            });
            f(child)
          });
        }
      }
      if(item.children && item.children.length){
        item.children.map(child =>{
          all.push({
            type,
            data: JSON.parse(JSON.stringify(child))
          });
          f(child)
        })
      }
      this.eventBus.$emit('item:all', all)
    }
  }
}
</script>
<style scoped>
  .fa-select-all{
    float:right;
    font-size:15px;
    cursor: pointer;
  }
</style>

<template>
  <div>
    <form role="search"
          class="app-search hidden-xs"
          @submit.prevent>
      <input v-model="keyword"
             placeholder="搜索"
             class="form-control"
             ref="input">
      <a @click="search"
         class="active"><i class="fa fa-search"></i></a>
    </form>
    <div class="result-list">
      <div v-if="type === 'account'">
        <div class="list-group">
          <a class="list-group-item"
             v-for="item in accounts"
             @click="setData(item)">{{item.cnName}}</a>
        </div>
      </div>
      <div v-else>
        <fk-department :department-data="remoteTree"
                       :event-bus="eventBus"
                       v-if="!keyword"
                       :type="type"
                       :need-account="needAccount"
                       :level="deptLevel"></fk-department>
        <div v-else>
          <div class="list-group">
            <a class="list-group-item"
               v-for="item in searchResult"
               @click="setData(item)">{{item.name}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import FkMixin from '../mixins/FkMixin.vue'
import { debounce } from 'lodash'
export default {
  data() {
    return {
      keyword: '',
      remoteTree: { children: [] },
      searchResult: [],
      deptLevel: 1,
      eventBus: new Vue(),
      accounts: []
    }
  },
  props: {
    value: '',
    needDefault: { type: Boolean, default: false },
    needAccount: { type: Boolean, default: false },
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
  watch: {
    'keyword'(kw) {
      this.search()
    }
  },
  mounted() {
    this.loadTree()
      .then(tree => {
        if (this.needDefault) {
          this.$emit('item:change', { type: this.type, data: tree })
        }
      })
  },
  methods: {
    loadTree() {
      if (this.type === 'account') {
        return this.$http.get(this.remote_domain + '/api/enterprise/resource').then(res => {
          this.accounts = res.data.data.accounts
        })
      }
      return this.$http.get(this.remote_domain + '/api/enterprise/pickerData', {
        params: {
          items: this.type,
          companyId: this.options.companyId
        }
      }).then(res => {
        this.remoteTree = res.data.data[this.type]
        return res.data.data[this.type]
      })
    },
    setData(item) {
      this.$emit('item:change', { type: this.type, data: item })
    },
    search: debounce(function () {
      if (this.type === 'account') {
        return this.$http.get(this.remote_domain + '/api/enterprise/resource', {
          params: {
            search: this.keyword
          },
          before(request) {
            // abort previous request, if exists
            if (this.previousRequest) {
              this.previousRequest.abort()
            }
            // set previous request on Vue instance
            this.previousRequest = request
          }
        }).then(res => {
          this.accounts = res.data.data.accounts
        })
      }
      this.$http.get(this.remote_domain + '/api/group/get', {
        params: {
          search: this.keyword,
          type: this.type
        }
      }).then(res => {
        this.searchResult = res.data.data.groups || []
      })
    }, 500),
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

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .app-search
    max-width 100%
    width 100%
    display inline-block
    .form-control, .form-control:focus
      margin-top 0
      max-width 100%
      width 100%
      background #edf1f5
    a
      top 5px
  .result-list
    height 260px    
    overflow-y auto
  .list-group-item
    padding 10px 15px
    border 1px solid #ddd

</style>
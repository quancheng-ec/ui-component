<template>
  <div style="position:relative;z-index:10">
    <ui-text-box v-model="chosenNames"
                 :horizontal="options.horizontal"
                 place-holder="选择人员"
                 :label="options.label"
                 :editable="false"
                 @click.native="list.show = true">
      <div v-if="list.show"
           class="dropdown-list">
        <div class="in dropdown-content">
          <form role="search"
                class="app-search hidden-xs"
                @submit.prevent>
            <input v-model="search"
                   placeholder="搜索员工"
                   class="form-control"
                   ref="input">
            <a @click="loadAccount"
               class="active"><i class="fa fa-search"></i></a>
          </form>
          <div class="list-group">
            <a v-for="account in list.accounts"
               class="list-group-item"
               @click="choseItem(account)">
              <i class="fa fa-user"></i> {{account.cnName}}
              <br> <small class="text-muted">{{account._departmentName}}</small>
            </a>
          </div>
        </div>
      </div>
    </ui-text-box>
  </div>
</template>

<script>
import { debounce, isArray, includes } from 'lodash'
import EventListener from '../libs/EventListener.es6.js'
export default {
  props: {
    value: {
      type: [String, Array],
      require: true
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    chosenNames() {
      if (this.options.multiple) {
        return this.chosenList.map(a => a.cnName).join(',')
      }
      return this.chosen.cnName
    }
  },
  data() {
    return {
      list: {
        show: false,
        accounts: []
      },
      chosenList: [],
      chosen: {},
      search: ''
    }
  },
  created() {
    if (!document) return
    this._closeEvent = EventListener.listen(document, 'click', e => {
      if (this.list.show === false) return
      if (!this.$el.contains(e.target)) {
        this.list.show = false
      }
    })
  },
  beforeDestroy() {
    if (this._closeEvent) this._closeEvent.remove()
  },
  watch: {
    'list.show'(show) {
      if (show) this.loadAccount()
    },
    'search'(kw) {
      this.loadAccount()
    }
  },
  methods: {
    loadAccount: debounce(function () {
      return this.$http.get(this.options.url || '/api/enterprise/resource', {
        params: {
          search: this.search
        }
      }).then(res => this.list.accounts = res.data.data.accounts)
    }, 300),
    choseItem(account) {
      if (this.options.multiple) {
        if (this.chosenList.filter(a => a.accountId === account.accountId).length) return
        this.chosenList.push(account)
        return this.$emit('input', this.chosenList.map(a => a.accountId).join(','))
      }
      this.chosen = account
      this.list.show = false
      this.$emit('input', account.accountId)
    }
  }
}
</script>


<style lang="stylus" ref="stylesheet/stylus" scoped>
  .dropdown-list
    position absolute
    width 100%
    padding-right 15px
  .dropdown-content
    width 100%
    padding 10px
    background #fff
    border 1px solid #e6e6e6
    .list-group
      margin-top 10px
      overflow auto
      max-height 200px
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
</style>
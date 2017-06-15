<template>
  <div>
    <ui-picker :text="chosenNames"
               :options="options"
               :multiple="options.multiple"
               :required="required"
               :validation-rules="validationRules"
               @list-show="loadAccount"
               ref="picker">
      <form role="search"
            class="app-search hidden-xs"
            @submit.prevent>
        <input v-model="search"
               :placeholder="globalLang === 'zh'?'搜索员工':'Search Employee'"
               class="form-control"
               ref="input">
        <a @click="loadAccount"
           class="active">
          <i class="fa fa-search"></i>
        </a>
      </form>
      <div class="list-group">
        <a @click="choseItem(null)"
           v-if="!required"
           class="list-group-item">{{globalLang === 'zh'?'无直属上级':'No Higher-up'}}</a>
        <a v-for="account in accounts"
           class="list-group-item"
           @click="choseItem(account)">
          <i class="fa fa-user"></i> {{account.cnName}}
          <br>
          <small class="text-muted">{{account._departmentName}}</small>
        </a>
      </div>
    </ui-picker>
  </div>
</template>

<script>
import UiPicker from './UiPicker.vue'
import FkMixin from '../mixins/FkMixin.vue'
import { debounce } from 'lodash'
export default {
  mixins: [FkMixin],
  props: {
    required: {
      type: Boolean
    },
    validationRules: {},
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
  components: { UiPicker },
  computed: {
    chosenNames() {
      if (!this.value) return (this.required ? '' : (this.options.noSelect || (this.golbalLang === 'zh' ? '无选择' : 'No Selected')))
      if (this.options.multiple) {
        return this.chosenList.map(a => a.cnName).join(',')
      }
      return this.chosen.cnName
    }
  },
  data() {
    return {
      accounts: [],
      chosenList: [],
      chosen: {
        accountId: '',
        cnName: ''
      },
      search: ''
    }
  },
  mounted() {
    if (this.value) {
      const request = this.$http.get(this.remote_domain + '/api/enterprise/resource', {
        params: {
          accountIds: this.value
        }
      }).then(res => res.data.data.accounts)
      if (!this.options.multiple) {
        return request.then(accounts => this.chosen = accounts[0])
      }
      return request.then(accounts => this.chosenList = accounts)
    }
  },
  watch: {
    'search'(kw) {
      this.loadAccount()
    }
  },
  methods: {
    loadAccount: debounce(function () {
      return this.$http.get(this.remote_domain + '/api/enterprise/resource', {
        params: {
          search: this.search
        }
      }).then(res => this.accounts = res.data.data.accounts)
    }, 300),
    choseItem(account) {
      if (account) {
        if (this.options.multiple) {
          if (this.chosenList.filter(a => a.accountId === account.accountId).length) return
          this.chosenList.push(account)
          return this.$emit('input', this.chosenList.map(a => a.accountId).join(','))
        }
        this.chosen = account
        this.$refs.picker.listShow = false
        return this.$emit('input', account.accountId)
      }
      this.$refs.picker.listShow = false
      return this.$emit('input', '')
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
</style>
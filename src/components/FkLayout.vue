<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top m-b-0 fk-layout--header"
         v-if="!navHidden">
      <div class="navbar-header">
        <div class="top-left-part">
          <a class="logo">
            <b>
              <img src="//qc-style.oss-cn-hangzhou.aliyuncs.com/sparta/web_icon/logo.png"
                   alt="home">
            </b>
            <span class="hidden-xs">
              <img src="//qc-style.oss-cn-hangzhou.aliyuncs.com/sparta/web_icon/logo_text.png"
                   alt="home">
            </span>
          </a>
        </div>
        <ul class="nav navbar-top-links navbar-left">
          <li v-for="link in topbar">
            <a :href="link.path"
               style="min-width:100px;text-align:center"
               :class="{'active':link.active}">{{link.text}}
              <span style="display:inline-block;width:6px;height:6px;background:#FE463B;border-radius:50%;margin-top:-10px;margin-left:5px;position:absolute;top:50%"
                    v-if="link.code === 'sparta-approve-topbar' && approveAmount.totalAmount"></span>
            </a>
          </li>
        </ul>
        <ul class="nav navbar-top-links navbar-right pull-right">
          <li class="dropdown"
              :class="{'open':showMenu}">
            <a class="dropdown-toggle profile-pic waves-effect"
               data-toggle="dropdown"
               @click.stop.prevent="showMenu = !showMenu">
              <b class="hidden-xs">
                <i class="fa fa-user"></i> {{account.cnName}}</b>
            </a>
            <ul class="dropdown-menu dropdown-user animated flipInY"
                v-if="showMenu"
                @click="showMenu = false">
              <!-- <slot name="user-menu">
                <li>
                  <a href="#">
                    <i class="ti-user"></i> {{i18nText[language].SETTINGS}}</a>
                </li>
              </slot> -->
              <li>
                <a :href="remote_domain + '/choosecompany/view?target=' + currentUrl">
                  <i class="ti-user"></i> {{i18nText[language].SWITCH_COMPANY}}</a>
              </li>
              <li>
                <a @click="setLang">
                  <i class="ti-world"></i> {{i18nText[language].LANGUAGE}}</a>
              </li>
              <li>
                <a @click="logout">
                  <i class="fa fa-power-off"></i> {{i18nText[language].LOGOUT}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="navbar-default sidebar fk-layout--menu"
         v-if="!sidebarHidden">
      <div v-if="needOuList"
           style="padding:5px">
        <!-- <ui-select :options="ouList"
                      v-if="currentOuId"
                      v-model="currentOuId"></ui-select> -->
        <ui-dropdown v-model="currentOuId"
                     v-if="currentOuId"
                     placeHolder=""
                     class="menu-ou-select"
                     :list="ouList"
                     text-key="text"
                     value-key="value"
                     select>
        </ui-dropdown>
      </div>
      <ul class="nav in"
          :style="{top: needOuList?'45px':'0'}"
          id="side-menu">
        <!-- <li class="sidebar-search hidden-sm hidden-md hidden-lg">
          <div class="input-group custom-search-form">
            <input type="text"
                    class="form-control"
                    placeholder="Search...">
            <span class="input-group-btn">
              <button class="btn btn-default"
                      type="button">
                <i class="fa fa-search"></i>
              </button>z </span>
          </div>
        </li> -->
        <li :class="{'active':!item.collapsed}"
            v-for="item in sidebar"
            v-if="item.visible">
          <a class="waves-effect"
             :class="{'active':item.active}"
             @click="item.collapsed = !item.collapsed">
            <i class="linea-icon linea-basic fa-fw"
               :data-icon="item.icon"></i>
            <span class="hide-menu"> {{item.text}}
              <span class="fa arrow"></span>
            </span>
          </a>
          <ul class="nav nav-second-level collapse in"
              aria-expanded="true"
              v-if="!item.collapsed">
            <li>
              <a :href="i.path"
                 :class="{'active':i.active}"
                 v-for="i in item.children">{{i.text}}
                <span style="display: inline-block;margin-left: 5px;text-align: center;white-space: nowrap;color: #fff;padding: 0 3px;min-width: 24px;height: 24px;border-radius: 40px;background: #fe463b;font-size: 12px;line-height:24px"
                      v-if="i.code === 'sparta-approve-work-business' && approveAmount.applyAmount">{{approveAmount.applyAmount}}</span>
                <span style="display: inline-block;margin-left: 5px;text-align: center;white-space: nowrap;color: #fff;padding: 0 3px;min-width: 24px;height: 24px;border-radius: 40px;background: #fe463b;font-size: 12px;line-height:24px"
                      v-if="i.code === 'sparta-approve-work-finance' && approveAmount.expenseAmount">{{approveAmount.expenseAmount > 99 ? '99+':approveAmount.expenseAmount}}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- <div class="slimScrollDiv"
           style="position: relative; overflow: visible; width: auto; height: 100%;">
        <div class="sidebar-nav navbar-collapse slimscrollsidebar active"
             style="overflow-x: visible; overflow-y: auto; width: auto; height: 100%;">
         
        </div>
        <div class="slimScrollBar"
             style="background: rgb(220, 220, 220); width: 0px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 1454px;"></div>
        <div class="slimScrollRail"
             style="width: 0px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
      </div> -->
    </div>
    <div id="page-wrapper"
         :style="{marginLeft: sidebarHidden?'0px':'220px',minHeight: '100%', marginTop: '60px'}">
      <div class="container-fluid"
           style="position:relative">
        <slot></slot>
      </div>
      <!-- /#page-wrapper -->
    </div>
    <slot name="sub-sidebar"></slot>
  </div>
</template>

<script>
import FkMixin from '../mixins/FkMixin.vue'
export default {
  mixins: [FkMixin],
  props: {
    layout: {},
    navHidden: {
      type: Boolean,
      default: false
    },
    sidebarHidden: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      language: 'zh',
      i18nText: {
        zh: {
          SETTINGS: '账号设置',
          LANGUAGE: 'English',
          SWITCH_COMPANY: '切换公司',
          LOGOUT: '登出',
          COMFIRM_LOGOUT: '确认要登出当前帐号？',
          COMFIRM_LOGOUT_YES: '确认',
          COMFIRM_LOGOUT_CANCEL: '取消'
        },
        en: {
          SETTINGS: 'SETTINGS',
          LANGUAGE: '中文',
          SWITCH_COMPANY: 'SWITCH COMPANY',
          LOGOUT: 'LOGOUT',
          COMFIRM_LOGOUT: 'Are you sure  you want to log out?',
          COMFIRM_LOGOUT_YES: 'Log out',
          COMFIRM_LOGOUT_CANCEL: 'Cancel'
        }
      },
      sidebar: [],
      topbar: [],
      showMenu: false,
      currentUrl: '',
      ouList: [],
      account: {},
      needOuList: false,
      currentOuId: '',
      approveAmount: {
        applyAmount: 0,
        expenseAmount: 0,
        totalAmount: 0
      }
    }
  },
  watch: {
    currentOuId(ouId, old) {
      if (!old) return
      this.$http
        .post(this.remote_domain + '/api/ou/changeOU', {
          ouId
        })
        .then(res => {
          if (res.data.data.success) {
            // location.replace(res.data.data.redirectUrl)
            // location.replace(location.origin)
            //跳转至当前激活的菜单地址
            let redirectUrl = res.data.data.redirectUrl
            for (let link of this.topbar) {
              if (link.active) {
                redirectUrl = link.path
                break
              }
            }
            location.replace(redirectUrl)
          }
        })
    }
  },
  created() {
    if (this.$parent.context && this.$parent.context._uiLayout) {
      this.setLayout({
        data: {
          data: this.$parent.context._uiLayout
        }
      })
    }
  },
  mounted() {
    this.currentUrl = location.href
    if (!(this.$parent.context && this.$parent.context._uiLayout)) {
      this.getLayout()
    }
  },
  methods: {
    getLayout(ouId) {
      return this.$http
        .get(this.remote_domain + '/api/layout/getLayout', {
          params: { ouId }
        })
        .then(this.setLayout)
    },
    setLayout(res) {
      this.language = res.data.data.language
      this.appId = res.data.data.appId
      this.currentOuId = res.data.data.currentOuId
      this.account = res.data.data.account

      if (res.data.data.sidebar.length === 1) {
        res.data.data.sidebar[0].collapsed = false
      }
      this.sidebar = res.data.data.sidebar
      this.topbar = res.data.data.topbar
      this.needOuList = res.data.data.needOuList
      this.ouList = res.data.data.ouList.map(ou => ({
        text: ou.cnName,
        value: ou.companyId
      }))
      this.approveAmount = res.data.data.approveAmount
    },
    logout() {
      this.$confirmBox({
        size: 'sm',
        content: this.i18nText[this.language].COMFIRM_LOGOUT,
        yes: this.i18nText[this.language].COMFIRM_LOGOUT_YES,
        cancel: this.i18nText[this.language].COMFIRM_LOGOUT_CANCEL
      }).then(res => {
        this.$http.post(this.remote_domain + '/api/login/logout').then(res => location.reload())
      })
    },
    setLang() {
      this.$http.post(this.remote_domain + '/api/chooselang/setLang').then(res => location.reload())
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.top-left-part
  width 245px
  background none

.navbar-header
  width 100%
  border 0
  background #3484DF

.fk-layout--header
  position fixed
  top 0
  right 0
  left 0
  height 60px

.fk-layout--menu
  position fixed
  top 60px
  right 220px
  bottom 0
  left 0
  overflow inherit
  padding 0
  height auto

.navbar-top-links>li>a.active
  background rgba(0, 0, 0, 0.1)

#side-menu
  position absolute
  top 0
  bottom 5px
  overflow auto
  width 100%

#side-menu > li > a.active
  background-color #ebf3fe

#side-menu ul > li > a.active
  background #fafafa
  color #609fe6

#side-menu .form-group
  margin-bottom 0

.sidebar .menu-ou-select
  width 100%

  & > button.dropdown-toggle
    position relative
    overflow hidden
    width 100%
    height 38px
    text-align left
    text-overflow ellipsis

    .caret
      position absolute
      top 16px
      right 6px

  .dropdown-menu
    min-width 210px
</style>
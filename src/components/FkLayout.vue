<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top m-b-0">
      <div class="navbar-header">
        <div class="top-left-part">
          <a class="logo"
             href="index.html">
            <b><img src="//cdn.u-booking.cn/sparta/web_icon/logo.png" alt="home"></b>
            <span class="hidden-xs"><img src="//cdn.u-booking.cn/sparta/web_icon/logo_text.png" alt="home"></span>
          </a>
        </div>
        <ul class="nav navbar-top-links navbar-right pull-right">
          <li class="dropdown">
            <a class="dropdown-toggle profile-pic waves-effect"
               data-toggle="dropdown">
              <b class="hidden-xs"><i class="fa fa-user"></i> {{account.cnName}}</b>
            </a>
            <ul class="dropdown-menu dropdown-user animated flipInY">
              <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
              <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>
              <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
              <li role="separator"
                  class="divider"></li>
              <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
              <li role="separator"
                  class="divider"></li>
              <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="navbar-default sidebar"
         role="navigation"
         style="overflow: visible;">
      <div class="slimScrollDiv"
           style="position: relative; overflow: visible; width: auto; height: 100%;">
        <div class="sidebar-nav navbar-collapse slimscrollsidebar active"
             style="overflow-x: visible; overflow-y: auto; width: auto; height: 100%;">
          <ul class="nav in"
              id="side-menu">
            <li class="sidebar-search hidden-sm hidden-md hidden-lg">
              <div class="input-group custom-search-form">
                <input type="text"
                       class="form-control"
                       placeholder="Search...">
                <span class="input-group-btn"><button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>z </span>
              </div>
            </li>
            <li :class="{'active':!item.collapsed}"
                v-for="item in sidebar">
              <a class="waves-effect"
                 :class="{'active':item.active}"
                 @click="item.collapsed = !item.collapsed">
                <i class="linea-icon linea-basic fa-fw"
                   :data-icon="item.icon"></i>
                <span class="hide-menu"> {{item.text}} <span class="fa arrow"></span>
                </span>
              </a>
              <ul class="nav nav-second-level collapse in"
                  aria-expanded="true"
                  v-if="!item.collapsed">
                <li><a :href="i.path"
                     :class="{'active':i.active}"
                     v-for="i in item.children">{{i.text}}</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="slimScrollBar"
             style="background: rgb(220, 220, 220); width: 0px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 1454px;"></div>
        <div class="slimScrollRail"
             style="width: 0px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
      </div>
    </div>
    <div id="page-wrapper"
         style="min-height: 100%;">
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
  props: ['layout'],
  data() {
    return {
      sidebar: [],
      account: {}
    }
  },
  mounted() {
    this.$http.get(this.remote_domain + '/api/layout/getLayout').then(res => {
      this.account = res.data.data.account
      this.sidebar = res.data.data.sidebar
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-left-part
    width 245px
  .navbar-header {
    width: 100%;
    background: #3484DF;
    border: 0;
  }
</style>
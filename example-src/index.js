import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Example from './Example'
import QCUI from './../src'
import { routeConfig } from './pages'

import './assets/style.styl'

QCUI.FkMixin.data = () => ({
  remote_domain: '//fkadmin.dev.quancheng-ec.com'
})

Vue.use(VueRouter)
Vue.use(QCUI)
Vue.use(VueResource)

routeConfig.unshift({ path: '/', redirect: '/Index' })

const router = new VueRouter({
  mode: 'history',
  routes: routeConfig
})

new Vue({
  el: '#example',
  router,
  render: h => h(Example)
})

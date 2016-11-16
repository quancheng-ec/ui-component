import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './Example'
import QCUI from './../src'
import { routeConfig } from './pages'

import './assets/style.styl'

Vue.use(VueRouter)
Vue.use(QCUI)

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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './Example'
import QCUI from './../src/components'
import { routeConfig } from './pages'

import './assets/style.styl'

Vue.use(VueRouter)
Vue.use(QCUI)

const router = new VueRouter({
  mode: 'history',
  routes: routeConfig
})

new Vue({
  el: '#example',
  router,
  render: h => h(Example)
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './Example'
import QCUI from './../src/components'

import './assets/style.styl'

Vue.use(VueRouter)
Vue.use(QCUI)

function requireAll(requireContext) {
  return requireContext.keys().map(mod => ({ path: getPath(mod), component: requireContext(mod) }))
}

function getPath(module) {
  return '/' + module.replace(/(\.\/)|(\.vue)/g, '')
}

const pages = requireAll(require.context('./pages', false, /\.vue$/))

const router = new VueRouter({
  mode: 'history',
  routes: pages
})

new Vue({
  el: '#example',
  router,
  render: h => h(Example)
})

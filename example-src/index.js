import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from './DemoApp'

Vue.use(VueRouter)

function dynamicLoadPage(to, from, next) {
  console.log(to)
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/'
    }, {
      path: '/*',
      beforeEnter: dynamicLoadPage
    }
  ]
})

new Vue({
  el: '#example',
  router,
  render: h => h(Demo)
})

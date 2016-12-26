import UiToast from './UiToast.vue'
import Vue from 'vue'

export default function $toast(opts = {}, delay = 1000) {
  const {content,size} = opts

  const confirmContainer = document.createElement('div')
  document.body.appendChild(confirmContainer)

  const confirm = new Vue(UiToast)
  confirm.content = content
  confirm.size = size

  confirm.$mount(confirmContainer)

  setTimeout(remove, delay)

  function remove() {
    confirm.$el.parentNode.removeChild(confirm.$el)
    confirm.$destroy()
  }
}

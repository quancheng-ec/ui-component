import UiToast from './UiToast.vue'
import Vue from 'vue'

export default function $toast(opts = {}) {
  const { content, size, type, duration } = opts

  const confirmContainer = document.createElement('div')
  document.body.appendChild(confirmContainer)

  const confirm = new Vue(UiToast)
  confirm.content = content
  confirm.size = size || 'sm'
  confirm.type = type || 'success'

  confirm.$mount(confirmContainer)
  setTimeout(remove, duration || 1000)

  function remove() {
    confirm.$refs.modal.classList.remove('fadeIn')
    confirm.$refs.modal.classList.add('fadeOut')
    setTimeout(() => {
      confirm.$el.parentNode.removeChild(confirm.$el)
      confirm.$destroy()
    }, 200)
  }
}

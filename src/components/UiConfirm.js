import UiModal from './UiModal.vue'
import Vue from 'vue'

const UiConfirm = {
  components: { UiModal },
  data(){
    return {
      show: false,
      title: 'confirm',
      content: 'xxx'
    }
  },
  methods: {
    confirm(){
      this.show = false
      this.$nextTick(() => {
        this.$emit('ui-confirm:chosen', 'confirm')
      })
    },
    cancel(){
      this.show = false
      this.$nextTick(() => {
        this.$emit('ui-confirm:chosen', 'cancel')
      })
    }
  },
  template: `<ui-modal
        :title="title"
        v-model="show"
        size="sm"
      >
        <div slot="content">{{content}}</div>
        <div slot="foot-btn">
          <button type="button" class="btn btn-info waves-effect" data-dismiss="modal"
                  @click="confirm">确认
          </button>
          <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal"
                  @click="cancel">取消
          </button>
        </div>
      </ui-modal>`
}

export default function $confirm(opts = {}) {
  const { title, content } = opts
  const confirmContainer = document.createElement('div')
  document.body.appendChild(confirmContainer)

  const confirm = new Vue(UiConfirm)
  confirm.title = title
  confirm.content = content

  confirm.$mount(confirmContainer).show = true

  return new Promise((resolve, reject) => {
    confirm.$on('ui-confirm:chosen', arg => {
      remove()
      if (arg === 'confirm') return resolve(arg)
      reject(arg)
    })
  })

  function remove() {
    confirm.$el.parentNode.removeChild(confirm.$el)
    confirm.$destroy()
  }
}


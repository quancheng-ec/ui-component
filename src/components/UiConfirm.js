import UiModal from './UiModal.vue'
import Vue from 'vue'

const UiConfirm = {
  components: { UiModal },
  props: ['opts'],
  methods: {
    confirm() {
      this.show = false
      this.$nextTick(() => {
        this.$emit('ui-confirm:chosen', 'confirm')
      })
    },
    cancel() {
      this.show = false
      this.$nextTick(() => {
        this.$emit('ui-confirm:chosen', 'cancel')
      })
    }
  },
  template: `<ui-modal
        :title="opts.title"
        v-model="opts.show"
        :size="opts.size"
      >
        <div slot="content">{{opts.content}}</div>
        <div slot="foot-btn">
          <button type="button" class="btn btn-info waves-effect" data-dismiss="modal"
                  @click="confirm">{{opts.yes || '确认'}}
          </button>
          <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal"
                  @click="cancel">{{opts.cancel || '取消'}}
          </button>
        </div>
      </ui-modal>`
}

export default function $confirm(opts = {}) {
  opts.show = true
  opts.type = 'sm'
  const confirmContainer = document.createElement('div')
  document.body.appendChild(confirmContainer)

  const confirm = new Vue(Object.assign(UiConfirm, {
    propsData: {
      opts
    }
  }))

  confirm.$mount(confirmContainer)

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

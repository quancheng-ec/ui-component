import UiModal from './UiModal.vue'
import Vue from 'vue'

const UiConfirm = {
  components: { UiModal },
  data(){
    return {
      show: true,
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
  render(h){
    return (
      <ui-modal
        title={this.title}
        show={this.show}
        size="sm"
      >
        <div slot="content">{this.content}</div>
        <div slot="foot-btn">
          <button type="button" class="btn btn-info waves-effect" data-dismiss="modal"
                  onClick={this.confirm}>确认
          </button>
          <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal"
                  onClick={this.cancel}>取消
          </button>
        </div>
      </ui-modal>
    )
  }
}

export default function $confirm(opts = {}) {
  const { title, content } = opts
  const confirmContainer = document.createElement('div')
  document.body.appendChild(confirmContainer)

  const confirm = new Vue(UiConfirm)
  confirm.title = title
  confirm.content = content

  confirm.$mount(confirmContainer)

  return new Promise(resolve => {
    confirm.$on('ui-confirm:chosen', arg => {
      remove()
      resolve(arg)
    })
  })

  function remove() {
    confirm.$el.parentNode.removeChild(confirm.$el)
    confirm.$destroy()
  }
}


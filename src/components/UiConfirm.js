import UiModal from './UiModal.vue'
import Vue from 'vue'

const localeDict = {
  yes: {
    zh: '确认',
    en: 'ok'
  },
  cancel: {
    zh: '取消',
    en: 'Cancel'
  }
}

const UiConfirm = {
  components: { UiModal },
  data () {
    return {
      localeDict
    }
  },
  props: ['opts'],
  methods: {
    confirm () {
      this.show = false
      this.$nextTick(() => {
        this.$emit('ui-confirm:chosen', 'confirm')
      })
    },
    cancel () {
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
        {{$locale}}
          <button type="button" class="btn btn-info waves-effect" data-dismiss="modal"
                  @click="confirm">{{opts.yes || localeDict.yes[opts.locale||'zh']}}
          </button>
          <button type="button" class="btn btn-danger waves-effect" data-dismiss="modal"
                  @click="cancel">{{opts.cancel || localeDict.cancel[opts.locale||'zh']}}
          </button>
        </div>
      </ui-modal>`
}

export default function $confirm (opts = {}) {
  opts.show = true
  opts.locale = this.globalLang
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

  function remove () {
    confirm.$el.parentNode.removeChild(confirm.$el)
    confirm.$destroy()
  }
}

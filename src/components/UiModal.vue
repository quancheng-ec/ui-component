<template>
  <div class="modal fade"
       :class="{'in':active}"
       v-if="value">
    <div class="modal-shadow"
         @click="closeModal"></div>
    <div class="modal-dialog"
         :class="modalSize">
      <div class="modal-content">
        <slot name="title"
              v-if="title || $slots.title">
          <div class="modal-header"
               :class="[bgClass,positionClass]">
            <button type="button"
                    class="close"
                    @click="closeModal"
                    v-if="showCloseButton">×</button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
        </slot>
        <div class="modal-body"
             v-if="$slots.content">
          <slot name="content"></slot>
        </div>
        <div class="modal-footer"
             v-if="$slots['foot-btn']">
          <slot name="foot-btn"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/babel'>
import classNames from 'classnames'
export default {
  computed: {
    modalSize() {
      return 'modal-' + this.size
    },
    bgClass() {
      return classNames('bg-' + this.bgColor)
    },
    positionClass() {
      return classNames('title-' + this.textPosition)
    },
    active: {
      get() {
        return this.value
      },
      set(bool) {
        this.$emit('input', bool)
      }
    }
  },
  props: {
    title: {
      type: String,
      require: true
    },
    value: {
      type: Boolean,
      default: false
    },
    showCloseButton: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    textPosition: {
      type: String,
      default: 'left'
    },
    appendEl: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.active = false
    }
  },
  mounted() {
    if (this.appendEl === 'body') {
      this.$el.parentNode.removeChild(this.$el)
      document.body.append(this.$el)
    }
  },
  watch: {
    value(n) {
      if (n) {
        return document.body.classList.add('modal-open')
      }
      this.$nextTick(() => {
        if (!document.querySelector('.modal')) {
          document.body.classList.remove('modal-open')
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .modal
    display block
    text-align center
  @media screen and (min-width: 768px) { 
    .modal:before {
      display: inline-block;
      vertical-align: middle;
      content: " ";
      height: 100%;
    }
  }  

  .modal-dialog
    display inline-block
    text-align left
    vertical-align middle

  .modal-shadow
    background rgba(0, 0, 0, 0.3)
    width 100%
    height 100%
    position fixed
    left 0
    top 0
</style>

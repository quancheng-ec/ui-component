<template>
<button :class='btnClass' :disabled="disabled" @click.prevent="clickHandler">
  <i v-if="icon && iconPosition == 'left'" :class="iconClass"></i>
  <span v-if="!circle">
    <slot>{{text}}</slot>
  </span>
  <i v-if="icon && iconPosition == 'right'" :class="iconClass"></i>
</button>
</template>

<script type='text/babel'>
import classNames from 'classnames'
export default {
  props: {
    type: {
      type: [String, Array],
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default () {}
    }
  },
  computed: {
    btnClass() {
      const btnClasses = (typeof this.type === 'string' ? this.type.split(' ') : this.type)
      return classNames('btn', btnClasses.map(cls => 'btn-' + cls), {
        'disabled': this.disabled,
        'btn-circle': this.circle
      })
    },
    iconClass() {
      return classNames('fa', 'fa-' + this.icon)
    }
  },
  methods: {
    clickHandler() {
      this.onClick()
    }
  }
}
</script>

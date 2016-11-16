<template>
<button :class='btnClass'>
  <slot>{{text}}</slot>
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
    text: {
      type: String,
      default: 'Button'
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
    }
  },
  computed: {
    btnClass() {
      const btnClasses = (typeof this.type === 'string' ? this.type.split(' ') : this.type)
      return classNames('btn', btnClasses.map(cls => 'btn-' + cls))
    }
  }
}
</script>

<template lang="html">
  <span :class="wrapClasses" v-clickoutside="closeDropdown">
        <input type="text" class="ant-time-picker-input" :placeholder="placeholder" @click="toggleDropdown" v-model="defaultValue" ref="timePicker" readonly :disabled="disabled">
        <span class="fa fa-clock-o ant-time-picker-icon"></span>
  <transition name="fade">
    <time-picker-option v-show="selected" :selected="selected" :hide-disabled="hideDisabledOptions" :style="style" v-model="defaultValue"
      :local-format="format" :disabled-h="disabledHours" :disabled-m="disabledMinutes" :disabled-s="disabledSeconds" ref="timePickerOption"
      @close="optionClose" @click.native.stop></time-picker-option>
  </transition>
  <div class="ant-time-picker-panel-addon" v-if="$scopedSlots.addon" ref="addon">
    <slot name="addon" :panel="$refs.timePickerOption"></slot>
  </div>
  </span>
</template>

<script lang="babel">
  function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
      var name = child.$options.name;

      if (name === componentName) {
        child.$emit.apply(child, [eventName].concat(params));
      } else {
        broadcast.apply(child, [componentName, eventName].concat([params]));
      }
    });
  };
  function getScroll(top) {
    var ret = window['page' + (top ? 'Y' : 'X') + 'Offset']
    var method = 'scroll' + (top ? 'Top' : 'Left')
    if (typeof ret !== 'number') {
      var d = window.document
      // ie6,7,8 standard mode
      ret = d.documentElement[method]
      if (typeof ret !== 'number') {
        // quirks mode
        ret = d.body[method]
      }
    }
    return ret
  };
  function getOffset(element, container = document.body) {
    const el_rect = element.getBoundingClientRect();
    const container_rect = container.getBoundingClientRect();
    const clientTop = element.clientTop || container.clientTop || 0;
    const clientLeft = element.clientLeft || container.clientLeft || 0;
    let top, left;

    if (container === document.body) {
      top = getScroll(true);
      left = getScroll();
    } else {
      top = container.scrollTop - container_rect.top;
      left = container.scrollLeft - container_rect.left;
    }

    return {
      top: el_rect.top + top - clientTop,
      left: el_rect.left + left - clientLeft,
      right: el_rect.right + left - clientLeft,
      bottom: el_rect.bottom + top - clientTop
    }
  };


  import timePickerOption from './UiTimePickerOption.vue';


  export default {
    directives: {
      clickoutside: {
        bind(el, binding, vnode) {
          function documentHandler(e) {
            if (el.contains(e.target)) {
              return false;
            }
            if (binding.expression) {
              binding.value(e);
            }
          }
          el.__vueClickOutside__ = documentHandler;
          document.addEventListener('click', documentHandler);
        },
        update() {

        },
        unbind(el, binding) {
          document.removeEventListener('click', el.__vueClickOutside__);
          delete el.__vueClickOutside__;
        }
      }
    },
    name: 'TimePicker',
    data() {
      return {
        prefix: 'ant-time-picker',
        style: {},
        dropDown: false,
        container: null,
        defaultValue: this.value,
        selected: false
      }
    },
    props: {
      placeholder: {
        type: String,
        default: 'time'
      },
      popupContainer: {
        type: Function,
        default: () => document.body
      },
      position: {
        type: String,
        default: 'absolute'
      },
      size: String,
      format: String,
      disabled: Boolean,
      value: {
        type: String,
        default: ''
      },
      hideDisabledOptions: {
        type: Boolean,
        default: false
      },
      disabledHours: Function,
      disabledMinutes: Function,
      disabledSeconds: Function
    },
    computed: {
      wrapClasses() {
        return [
          this.prefix,
          `${this.prefix}-${this.size}`
        ]
      }
    },
    mounted() {
      this.container = this.popupContainer();
      this.$refs.timePickerOption.$el.style.position = this.position;
      this.container.appendChild(this.$refs.timePickerOption.$el);

      this.$nextTick(() => {
        this.setPosition();
      })
      let timer = null;
      window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (!this.disabled) {
            this.setPosition();
          }
        }, 200)
      })

      if (this.$refs.addon) {
        this.$refs.timePickerOption.$el.children[0].appendChild(this.$refs.addon);
      }
    },
    beforeDestroy() {
      this.container.removeChild(this.$refs.timePickerOption.$el);
    },
    watch: {
      defaultValue(val) {
        this.$emit('input', val)
        this.dispatch('FormItem', 'form.change', [val]);
      }
    },
    methods: {
      optionClose() {
        this.selected = false;
      },
      toggleDropdown() {
        this.selected = !this.selected;
        if (this.selected) {
          this.$nextTick(() => {
            this.setPosition();
          })
        }
      },
      setPosition() {
        if (!this.$el) {
          return
        }
        let p = getOffset(this.$refs.timePicker, this.container);

        this.style = {
          top: p.top + 'px',
          left: p.left + 'px'
        }
      },
      closeDropdown() {
        this.selected = false;
      },
      dispatch(componentName, eventName, params) {
        var parent = this.$parent || this.$root;
        var name = parent.$options.name;

        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;

          if (parent) {
            name = parent.$options.name;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    },
    components: {
      timePickerOption,
    },
  }

</script>

<style>
.ant-time-picker-panel {
    max-width: 168px;
    z-index: 1050;
    position: absolute;
}

.ant-time-picker-panel-inner {
    display: inline-block;
    position: relative;
    outline: none;
    list-style: none;
    font-size: 12px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
    line-height: 1.5;
    overflow: hidden;
    left: -2px;
}

.ant-time-picker-panel-input {
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    cursor: auto;
    line-height: 1.5;
    outline: 0;
}

.ant-time-picker-panel-input-wrap {
    box-sizing: border-box;
    position: relative;
    padding: 6px;
    border-bottom: 1px solid #e9e9e9;
}

.ant-time-picker-panel-input-invalid {
    border-color: red;
}

.ant-time-picker-panel-clear-btn {
    position: absolute;
    right: 5px;
    cursor: pointer;
    overflow: hidden;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    top: 5px;
    margin: 0;
}

.ant-time-picker-panel-clear-btn:after {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.25);
    display: inline-block;
    line-height: 1;
    width: 20px;
    transition: color 0.3s ease;
    font-family: 'anticon';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\e62e";
}

.ant-time-picker-panel-clear-btn:hover:after {
    color: rgba(0, 0, 0, 0.43);
}

.ant-time-picker-panel-narrow .ant-time-picker-panel-input-wrap {
    max-width: 112px;
}

.ant-time-picker-panel-select {
    float: left;
    font-size: 12px;
    border-left: 1px solid #e9e9e9;
    box-sizing: border-box;
    width: 56px;
    overflow: hidden;
    position: relative;
    max-height: 144px;
}

.ant-time-picker-panel-select:hover {
    overflow-y: auto;
}

.ant-time-picker-panel-select:first-child {
    border-left: 0;
    margin-left: 0;
}

.ant-time-picker-panel-select:last-child {
    border-right: 0;
}

.ant-time-picker-panel-select:only-child {
    width: 100%;
}

.ant-time-picker-panel-select ul {
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0 0 120px 0;
    width: 100%;
}

.ant-time-picker-panel-select li {
    list-style: none;
    box-sizing: content-box;
    margin: 0;
    padding: 0 0 0 16px;
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: left;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s ease;
}

.ant-time-picker-panel-select li:hover {
    background: #ecf6fd;
}

li.ant-time-picker-panel-select-option-selected {
    background: #f7f7f7;
    font-weight: bold;
}

li.ant-time-picker-panel-select-option-disabled {
    color: rgba(0, 0, 0, 0.25);
}

li.ant-time-picker-panel-select-option-disabled:hover {
    background: transparent;
    cursor: not-allowed;
}

.ant-time-picker-panel-combobox {
    zoom: 1;
}

.ant-time-picker-panel-combobox:before,
.ant-time-picker-panel-combobox:after {
    content: " ";
    display: table;
}

.ant-time-picker-panel-combobox:after {
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
}

.ant-time-picker-panel-addon {
    padding: 8px;
    border-top: 1px solid #e9e9e9;
}

.ant-time-picker-panel.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-topLeft,
.ant-time-picker-panel.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-topRight,
.ant-time-picker-panel.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-topLeft,
.ant-time-picker-panel.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-topRight {
    animation-name: antSlideDownIn;
}

.ant-time-picker-panel.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-bottomLeft,
.ant-time-picker-panel.slide-up-enter.slide-up-enter-active.ant-time-picker-panel-placement-bottomRight,
.ant-time-picker-panel.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-bottomLeft,
.ant-time-picker-panel.slide-up-appear.slide-up-appear-active.ant-time-picker-panel-placement-bottomRight {
    animation-name: antSlideUpIn;
}

.ant-time-picker-panel.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-topLeft,
.ant-time-picker-panel.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-topRight {
    animation-name: antSlideDownOut;
}

.ant-time-picker-panel.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-bottomLeft,
.ant-time-picker-panel.slide-up-leave.slide-up-leave-active.ant-time-picker-panel-placement-bottomRight {
    animation-name: antSlideUpOut;
}

.ant-time-picker {
    position: relative;
    display: inline-block;
    outline: none;
    font-size: 12px;
    transition: opacity 0.3s ease;
    width: 100px;
}

.ant-time-picker-input {
    position: relative;
    display: inline-block;
    padding: 4px 7px;
    width: 100%;
    height: 28px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all .3s;
}

.ant-time-picker-input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
}

.ant-time-picker-input:-ms-input-placeholder {
    color: #ccc;
}

.ant-time-picker-input::-webkit-input-placeholder {
    color: #ccc;
}

.ant-time-picker-input:hover {
    border-color: #49a9ee;
}

.ant-time-picker-input:focus {
    border-color: #49a9ee;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(16, 142, 233, 0.2);
}

.ant-time-picker-input[disabled] {
    background-color: #f7f7f7;
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
}

.ant-time-picker-input[disabled]:hover {
    border-color: #e2e2e2;
}

textarea.ant-time-picker-input {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
}

.ant-time-picker-input-lg {
    padding: 6px 7px;
    height: 32px;
}

.ant-time-picker-input-sm {
    padding: 1px 7px;
    height: 22px;
}

.ant-time-picker-large .ant-time-picker-input {
    padding: 6px 7px;
    height: 32px;
}

.ant-time-picker-small .ant-time-picker-input {
    padding: 1px 7px;
    height: 22px;
}

.ant-time-picker-open {
    opacity: 0;
}

.ant-time-picker-icon {
    position: absolute;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 12px;
    height: 12px;
    line-height: 12px;
    right: 8px;
    color: rgba(0, 0, 0, 0.43);
    top: 50%;
    margin-top: -6px;
}
</style>
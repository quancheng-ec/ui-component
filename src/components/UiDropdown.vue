<template>
  <div class="btn-group"
       :class="boxClass"
       @click="openDropdown">
    <button aria-expanded="false"
            data-toggle="dropdown"
            class="btn dropdown-toggle waves-effect waves-light"
            :class="btnClass"
            :disabled="disabled"
            type="button">
      <slot>{{_showLabel()}}</slot> <span class="caret"></span>
    </button>
    <slot name="menu">
      <ul role="menu"
          class="dropdown-menu">
        <template v-for="item in list">
          <li :class="{'dropdown-disabled':item.disabled}">
            <a @click="clickItem(item, $event)"
               href="javascript:void(0)">{{typeof item == 'object'?item[textKey]:item}}<i v-if="select && _isChecked(item)" class="dropdown_icon" :class="iconClass"></i></a>
          </li>
          <li v-if="item.divider"
              class="divider"></li>
        </template>
      </ul>
    </slot>

  </div>
</template>

<script>
  import EventListener from '../libs/EventListener.es6'
  import classNames from 'classnames'
  export default {
    props: {
      value: {},  //  支持v-model，只有在props激活select属性生效
      label: {
        type: String,
        default: ''
      },
      maxLabel: { //  label最大显示字数
        type: Number
      },
      disabled: {
        type: Boolean,
        default: false
      },
      textKey: {//  设置下拉菜单显示的文本值，list必须为对象数组
        type: String,
        default: 'text'
      },
      valueKey: {// 设置下拉菜单用于的ID值，用于v-model双绑实现选中效果，list必须为对象数组
        type: String,
        default: 'value'
      },
      list: {//渲染下拉菜单数组
        type: Array,
        default() {
          return []
        }
      },
      dropup: {// 改变下拉菜单展开方向，是否向上展开
        type: Boolean,
        default: false
      },
      type: {// 设置dropdown样式(与button样式相同)
        type: [String, Array],
        default: 'default outline'
      },
      clickClose: {// 选中下拉项后是否关闭下拉菜单
        type: Boolean,
        default: true
      },
      select: {// 将dropdown改变为select形式的组件，支持v-model绑定
        type: Boolean,
        default: false
      },
      multiple: {//多选，只有在select形态下有效
        type: Boolean,
        default: false
      },
      icon: {// 设置选中状态icon，只有在select形态下有效
        type: String,
        default: 'check'
      },
      placeHolder: {//  默认显示文本，只有在select形态下有效
        type: String
      },
      returnObject: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      boxClass() {
        return {
          open: this.open,
          dropup: this.dropup
        }
      },
      btnClass() {
        const Classes = this.type ? (typeof this.type === 'string' ? this.type.split(' ') : this.type) : []
        return classNames(Classes.map(cls => 'btn-' + cls))
      },
      iconClass() {
        return classNames('fa', 'fa-' + this.icon)
      }
    },
    methods: {
      openDropdown() {
        if(this.disabled) return
        this.open = !this.open
        this.$emit('dropdown:opened', this.open)
      },
      clickItem(item, e) {
        if (item.disabled) return
        if (this.select) {
          let value = JSON.parse(JSON.stringify(this.value)) || []
          if (this.multiple) {
            let i = value.findIndex(v => {
              return (this.returnObject ? v[this.valueKey] : v) == item[this.valueKey]
            })
            if (i == -1) {
              value.push(this.returnObject ? item : item[this.valueKey])
            } else {
              value.splice(i, 1)
            }
          } else {
            value = this.returnObject ? item : item[this.valueKey]
          }
          this.$emit('input', value, e)
        }
        this.$emit('no-click', item, e)
      },
      _value(item) {
        return this.returnObject ? item : item[this.valueKey]
      },
      _isChecked(item) {
        if (this.value == undefined) return
        let flag = false
        if (this.multiple) {
          for (let v of this.value) {
            if ((this.returnObject ? v[this.valueKey] : v) === item[this.valueKey]) {
              flag = true
              break
            }
          }
        } else {
          flag = ((this.returnObject ? this.value[this.valueKey] : this.value) === item[this.valueKey])
        }
        return flag
      },
      _showLabel() {
        if (this.select) {
          if(this.value == undefined) return this.placeHolder
          let name = []
          if (this.multiple) {
            for (let v of this.value) {
              for (let item of this.list) {
                if (item[this.valueKey] === (this.returnObject ? v[this.valueKey] : v)) {
                  name.push(item[this.textKey])
                  break
                }
              }
            }
          } else {
            for (let item of this.list) {
              if (item[this.valueKey] === (this.returnObject ? this.value[this.valueKey] : this.value)) {
                name.push(item[this.textKey])
                break
              }
            }
          }
          if (name.length) {
            return (this.maxLabel && name.join(',').length > this.maxLabel) ? `${name.join(',').substr(0, this.maxLabel)}...` : name.join(',')
          }
          return this.placeHolder
        }
        return this.maxLabel ? this.label : ''
      }
    },
    mounted() {
      const el = this.$el
      this._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (this.clickClose) {
          if (!el.contains(e.target)) {
            this.open = false
          }
        } else {
          if (el.contains(e.target) && e.target.nodeName.toLowerCase() == 'button' && !this.open) {
            this.open = false
            return
          }
          this.open = el.contains(e.target)
        }
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .dropdown-disabled a
    color #b4b4b4 !important
    &:hover,&:focus
      background-color transparent !important
      cursor not-allowed
</style>
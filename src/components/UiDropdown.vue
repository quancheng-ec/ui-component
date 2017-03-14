<template>
  <div class="btn-group m-r-10 " :class="boxClass" @click="openDropdown">
    <button aria-expanded="false" data-toggle="dropdown" class="btn dropdown-toggle waves-effect waves-light" :class="btnClass" type="button">
      <slot>{{label}}</slot> <span class="caret"></span>
    </button>
    <slot name="menu">
      <ul role="menu" class="dropdown-menu">
        <template v-for="item in list">
          <li><a @click="clickItem(item, $event)" href="javascript:void(0)">{{item[textKey]}}</a></li>
          <li v-if="item.divider" class="divider"></li>
        </template>
      </ul>
    </slot>

  </div>
</template>

<script>
  import EventListener from '../libs/EventListener.es6'
  import classNames from 'classnames'
  export default {
    props : {
      label : {
        type: String,
        default: 'dropdown'
      },
      textKey : {
        type: String,
        default: 'text'
      },
      list: {
        type: Array,
        default: []
      },
      dropup: {
        type: Boolean,
        default: false
      },
      type: {
        type : [String, Array],
        default : 'info'
      },
      clickClose: {
        type: Boolean,
        default: true
      }

    },
    data(){
      return {
        open : false
      }
    },
    computed: {
      boxClass(){
        return {
          open : this.open,
          dropup : this.dropup
        }
      },
      btnClass() {
        const Classes = this.type?(typeof this.type === 'string' ? this.type.split(' ') : this.type):[];
        return classNames(Classes.map(cls => 'btn-' + cls));
      }
    },
    methods: {
      openDropdown(){
        this.open = !this.open;
      },
      clickItem(item, e){
        this.$emit('no-click', item, e);
      }
    },
    mounted() {
      const el = this.$el;
      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if(this.clickClose){
          if (!el.contains(e.target)){
            this.open = false;
          }
        }else{
          if(el.contains(e.target) && e.target.nodeName.toLowerCase() == 'button' && !this.open){
            this.open = false;
            return;
          }
          this.open = el.contains(e.target);
        }
      });
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove();
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
</style>
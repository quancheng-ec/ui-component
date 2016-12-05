<template>
  <div>
    <div class="modalclass" v-show="show">
      <div class="modal-shadow" @click="closeModal"></div>
      <div class="modal-wrapper" :class="modalSize">

        <slot name="title">
          <div class="modal-title">
            <span class="close" @click="closeModal" v-if="showCloseButton">×</span>
            <div v-text="title"></div>
          </div>
        </slot>

        <slot name="main">
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
        </slot>

        <slot name="button">
          <div class="modal-footer">
            <slot name="foot-btn"></slot>
          </div>
        </slot>

      </div>
    </div>
  </div>
</template>

<script type='text/babel'>
	import classNames from 'classnames'
	export default {
		props: {
			title: {
				type: String,
				require: true
			},
			show: {
				type: Boolean,
				default: false
			},
			showCloseButton: {
				type: Boolean,
				default: false
      },
			size:{
				type: String
      }
		},
		methods: {
			closeModal(){
				this.show=false;
			}
		},
		computed: {
			modalSize(){
				return classNames('modal-' + this.size)
			}
		}
	}
</script>


<style lang='stylus' rel='stylesheet/stylus'>
  .modal-open
    display visibility
  .modalclass
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 9999
    .modal-shadow
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      background rgba(0,0,0,0.4)
    .modal-wrapper
      width 600px
      position absolute
      top 50%
      left 50%
      transform: translate(-50%);
      &.modal-lg
        width 900px
      &.modal-sm
        width 300px
    .modal-title
      padding 15px
      background #fff
      border-bottom 1px #e5e5e5 solid
    .modal-body
      padding 25px 15px
      background #fff
    .modal-footer
      background #fff
</style>

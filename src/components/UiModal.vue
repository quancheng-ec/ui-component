<template>
  <div>
    <div class="modalclass" v-if="show">
      <div class="modal-shadow" @click="closeModal"></div>
      <div class="modal-wrapper" :class="modalSize">

        <slot name="title" v-if="title || $slots.title">
          <div class="modal-title" :class="[bgClass,positionClass]">
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
          <div class="modal-foot">
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
		},
		methods: {
			closeModal(){
				this.$emit('uiModelClose')
			}
		},
		computed: {
			modalSize(){
				return classNames('modal-' + this.size)
			},
      bgClass(){
        return classNames('bg-' + this.bgColor)
      },
      positionClass(){
        return classNames('title-' + this.textPosition)
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
      transform:translate(-50%,-50%);
      &.modal-lg
        width 900px
      &.modal-sm
        width 300px
      &.modal-per
        width 90%
    .modal-title
      padding 15px
      background #fff
      border-bottom 1px #e5e5e5 solid
    .title-center
      text-align center
    .modal-body
      padding 25px 15px
      background #fff
    .modal-foot
      background #fff
    .bg-white
      background #fff
    .bg-purple
      background #9786ff
      color #fff
    .bg-orange
      background #ff9f39
      color #fff
    .bg-gray
      background #aab0b5
      color #fff
    .bg-green
      background #87BC3B
      color #fff
    .bg-red
      background #FF9B99
      color #fff
    .bg-blue
      background #5A97F1
      color #fff
</style>

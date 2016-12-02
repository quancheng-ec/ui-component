<template>
    <div class="infoclass clearfix">

        <span class="pull-left icon-pic" :class="iconClass" v-if="icon"></span>

        <span class="pull-left info-text">{{infoText}}</span>

    </div>
</template>

<script type='text/babel'>
	import classNames from 'classnames'
	export default {
		props: {
			type: {
				type: [String, Array],
				default: 'default'
			},
			icon: {
				type: String,
				default: null
			},
			infoText: {
				type: String
			}
		},
		computed: {
			iconClass(){
				return classNames('fa', 'fa-' + this.icon)
			}
		},
	}
</script>


<style lang='stylus' rel='stylesheet/stylus'>
    .infoclass
      padding 8px 15px
      background #999
      .icon-pic
        color yellow
        width 20px
      .info-text
        width calc(100% - 25px)
        color #fff
</style>

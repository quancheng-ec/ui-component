<template>
    <div class="infoclass clearfix">

        <span class="pull-left icon-pic" :class="iconClass" v-if="icon"></span>

        <span class="pull-left info-text">
          <span v-if="infoText"></span>
          <slot v-else>{{infoText}}</slot>
        </span>

        <ui-info

        icon="person"

        info-text="this is a info"

        >

          xxxxxxxxxx

        </ui-info>

    </div>
</template>

<script type='text/babel'>
	import classNames from 'classnames'
	export default {
		props: {
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
        // fa fa-person
			}
		}
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

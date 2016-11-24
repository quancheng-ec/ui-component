<template>
    <div class="cellclass">
        <div class="cell__stage clearfix">

            <div class="pull-left">
                <div>
                    <span class="icon-pic" :class="iconClass" v-if="icon"></span>
                    <slot>{{title}}</slot>
                </div>
                <div class="text-muted">{{subTitle}}</div>
            </div>

            <div class="pull-right">
                <span class="pull-right" :class="fontColor">{{rightText}}</span>
                <span class="fa fa-angle-right icon-r" v-if="arrow"></span>
            </div>

        </div>

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
			title: {
				type: String,
				default: 'cell',
				require: true
			},
			subTitle: {
				type: String
			},
			arrow: {
				type: Boolean,
				default: false
			},
			rightText: {
				type: String
			},
			color: {
				type: String,
				default: 'text-muted'
			},
		},
		computed: {
			iconClass(){
				return classNames('fa', 'fa-' + this.icon)
			},
			fontColor(){
				return classNames('text-' + this.color)
			}
		},
	}
</script>


<style lang='stylus' rel='stylesheet/stylus'>
    .cell__stage
        border-top 1px #d9d9d9 solid
        border-bottom 1px #d9d9d9 solid
        padding 10px 15px
        margin-bottom 10px
        position relative
        .icon-pic
            padding-right 5px
        .icon-r
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            padding-left 10px
</style>

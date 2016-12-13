<template>
<div class="demo-page">
  <ui-heading :level="1">UIHeading</ui-heading>
  <ui-grid-group>
    <ui-grid-item>
      <ui-panel>
        <div class="panel__heading" slot="header">
          Default heading
        </div>
        <ui-heading :level="level" v-for="level in [1,2,3,4,5]">heading level:{{level}}</ui-heading>
      </ui-panel>
    </ui-grid-item>
    <ui-grid-item>
      <ui-panel>
        <div class="panel__heading" slot="header">
          Inset heading
        </div>
        <ui-heading :level="level" inset v-for="level in [1,2,3,4,5]">heading level:{{level}}</ui-heading>

        <ui-table :order-list="orderList" type="bordered striped"></ui-table>

      </ui-panel>
    </ui-grid-item>
  </ui-grid-group>
</div>
</template>

<script>
export default {
	data(){
		return {
			orderList: {
				schema: {
					name: '参数',
					description: '描述',
					type: '类型',
					Default: '默认值',
					note: '备注'
				},
				values: [
					{
						name: 'level',
						description: '标题大小',
						type: '[String, Number]',
						Default: 'null',
						note: 'required: true',
						note: '1:h1,2:h2,3:h3,4:h4,5:h5'
					},
					{
						name: 'color',
						description: '文本颜色',
						type: 'String',
						Default: '#000'
					},
					{
						name: 'inset',
						description: '标题背景色',
						type: 'Boolean',
						Default: 'false',
					}
				]
			}
		}
	}
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

</style>

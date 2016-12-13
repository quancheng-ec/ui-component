<template>
  <div class="demo-page">
    <ui-heading :level="1">UIInfo</ui-heading>
    <ui-panel>
      <div class="panel__heading" slot="header">
        Default info
      </div>
      <ui-info
        icon="warning"
        infoText="根据公司政策，您的酒店费用标准为300元/晚。根据公司政策，您的酒店费用标准为300元/晚。根据公司政策，您的酒店费用标准为300元/晚。"
      ></ui-info>

      <ui-table :order-list="orderList" type="bordered striped"></ui-table>

    </ui-panel>
  </div>
</template>



<script type="text/babel">

	export default {
		data(){
			return {
				orderList: {
					schema: {
						name: '参数',
						description: '描述',
						type: '类型',
						Default: '默认值'
					},
					values: [
						{
							name: 'icon',
							description: '图标',
							type: 'String',
							Default: 'null',
						},
						{
							name: 'infoText',
							description: '提示信息',
							type: 'String',
							Default: 'null',
						}
					]
				}
			}
		},
	}

</script>

<style lang='stylus' rel='stylesheet/stylus'>
  table
    margin-top 20px
</style>
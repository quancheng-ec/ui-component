<template>
  <div class="demo-page">
    <ui-heading :level="1">UIModal</ui-heading>
    <ui-panel>
      <div class="panel__heading" slot="header">
        Default Modal
      </div>

      <button @click="onClick">点我</button>

      <ui-modal
        title="我是标题"
        :show="show"
        @uiModelClose="closeModal"
        showCloseButton
        size="sm"
      >
      <div slot="content">我是内容</div>
      <div slot="foot-btn">
        <button type="button" class="btn btn-info waves-effect" data-dismiss="modal" @click="closeModal">Close</button>
      </div>
      </ui-modal>

      <ui-table :order-list="orderList" type="bordered striped hover"></ui-table>

    </ui-panel>
  </div>
</template>



<script type="text/babel">

	export default {
		data(){
			return {
				show: false,
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
							name: 'title',
							description: '标题',
							type: 'String',
							Default: 'null',
							require: true
						},
						{
							name: 'show',
							description: '是否展示',
							type: 'Boolean',
							Default: 'false'
						},
						{
							name: 'showCloseButton',
							description: '弹窗的右上角关闭图标',
							type: 'false',
							Default: 'null'
						},
						{
							name: 'size',
							description: '弹窗的大小',
							type: 'String',
							Default: 'null',
							note: 'sm:宽300px,lg:宽900px,默认是600px'
						}
					]
				}
			}
		},
		methods: {
			onClick(){
				this.show=true;
			},
			closeModal(){
				this.show=false;
			}
		}
	}

</script>

<template>
  <div class="demo-page">
    <ui-heading :level="1">UICell</ui-heading>
    <ui-panel>
      <div class="panel__heading" slot="header">
        Default cell
      </div>
      <ui-cell
        :icon="icon"
        title="Notifications"
        right-text="Enable"
        color="primary"
        required
      ></ui-cell>
      <ui-cell
        title="Notifications"
        sub-title="isLink is set to true when link exists"
        arrow
        @on-click="handleClick('111')"
      ></ui-cell>
      <ui-table :order-list="orderList" type="bordered striped"></ui-table>
    </ui-panel>
  </div>
</template>



<script type="text/babel">

	export default {
		data(){
			return {
				icon:'smile-o',
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
		          name: 'icon',
		          description: '图标',
		          type: 'String',
		          Default: 'null',
	          },
	          {
		          name: 'title',
		          description: '标题',
		          type: 'String',
		          Default: 'cell',
		          note: 'require: true'
	          },
	          {
		          name: 'subTitle',
		          description: '副标题',
		          type: 'String',
		          Default: 'null',
	          },
	          {
		          name: 'arrow',
		          description: '向右箭头',
		          type: 'Boolean',
		          Default: 'false',
	          },
	          {
		          name: 'rightText',
		          description: '状态',
		          type: 'String',
		          Default: 'null',
	          },
	          {
		          name: 'color',
		          description: '状态值的颜色',
		          type: 'String',
		          Default: 'text-muted',
              note: 'primary:紫色,success:绿色,info:蓝色,warning:黄色,danger:橘色,muted:灰色,'
            },
            {
              name: 'leftUpperSlot',
              description: '左侧上方位slot',
              type: 'slot标识',
              Default: null,
              note: '左上角slot的name值'
            },
            {
              name: 'leftBottomSlot',
              description: '左侧下方位slot',
              type: 'slot标识',
              Default: null,
              note: '右上角slot的name值'
            },
            {
              name: 'rightSlot',
              description: '右侧slot',
              type: 'slot标识',
              Default: null,
              note: '右上角slot的name值'
	          },
            {
              name: 'required',
              description: '必填标识符',
              type: 'Boolean',
              Default: 'false',
            },
	          {
		          name: 'onClick',
		          description: '点击事件',
		          type: 'Function',
		          Default: 'function(){}',
	          }
          ]
        }
      }
    },
    methods:{
			handleClick(param){
				alert(param)
      }
    }

	}

</script>

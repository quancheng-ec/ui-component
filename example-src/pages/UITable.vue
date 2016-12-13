<template>
<div class="demo-page">
  <ui-heading :level="1">UITable</ui-heading>
  <ui-panel>
    <div class="panel__heading" slot="header">
      Default table
    </div>

    <ui-table :order-list="orderList" type="bordered striped hover"></ui-table>


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
				    Default: '默认值',
				    note: '备注'
			    },
			    values: [
				    {
					    name: 'type',
					    description: '类型',
					    type: '[String, Array]',
					    Default: 'null',
					    note: 'bordered:带边框,striped:间隔行带背景色,hover:鼠标悬浮时带背景色'
				    }
			    ]
		    }
      }
    }
  }

</script>

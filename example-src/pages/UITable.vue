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
				    id: '#',
				    firstName: '名字',
				    lastName: '姓',
				    username: '用户名',
				    role: '角色',
            status: '状态'
			    },

			    values: [
				    {
					    id: '1',
					    firstName: 'Deshmukh',
					    lastName: 'Hickle',
					    username: '@Maruti',
					    role: '会员',
				    },
				    {
					    id: '2',
					    firstName: 'Deshmukh',
					    lastName: 'PROHASKA',
					    username: '@Genelia',
					    role: '管理员'
				    },
            {
					    id: '3',
					    firstName: 'Sanghani',
					    lastName: 'Gusikowski',
					    username: '@Govinda',
					    role: '会员'
				    }
			    ]
		    }
      }
    }
  }

</script>

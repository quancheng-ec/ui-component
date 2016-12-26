<template>
  <div class="demo-page">
    <ui-heading :level="1">UIToast</ui-heading>
    <ui-panel>
      <div class="panel__heading" slot="header">
        Default Toast
      </div>

      <button @click="onClick">点我</button>


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
              name: 'show',
              description: '是否展示',
              type: 'Boolean',
              Default: 'false'
            },
            {
              name: 'size',
              description: '弹窗的大小',
              type: 'String',
              Default: 'null',
              note: 'per:宽90%,sm:宽300px,lg:宽900px,默认是600px'
            }
          ]
        }
      }
    },
    methods: {
      onClick(){
        this.show = true
        this.$toastBox({
          content: '这是一个toast box',
          size: 'sm'
        })
      }
    }
  }

</script>



<template>
  <div>
    <ui-panel>
      <h3 class="box-title">常规按钮</h3>
      <ui-grid-group>
        <ui-grid-item v-for="type in btnTypes" space="2">
          <ui-button :type="type + ' block'">
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
      <h3 class="box-title">圆角按钮</h3>
      <ui-grid-group>
        <ui-grid-item v-for="type in btnTypes" space="2">
          <ui-button :type="[type,'block','rounded']">
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
      <h3 class="box-title">禁用状态</h3>
      <ui-grid-group>
        <ui-grid-item v-for="type in btnTypes" space="2">
          <ui-button :type="[type,'block']" disabled>
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
      <h3 class="box-title">描边按钮</h3>
      <ui-grid-group>
        <ui-grid-item v-for="type in btnTypes" space="2">
          <ui-button :type="[type,'block','outline']">
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
      <h3 class="box-title">描边圆角按钮</h3>
      <ui-grid-group>
        <ui-grid-item v-for="type in btnTypes" space="2">
          <ui-button :type="[type,'block','rounded','outline']">
            {{type}}
          </ui-button>
        </ui-grid-item>
      </ui-grid-group>
    </ui-panel>
    <ui-grid-group>
      <ui-grid-item space="4">
        <ui-panel>
          <h3 class="box-title">icon按钮</h3>
          <div class="button-box">
            <ui-button :type="['default','outline']" icon="heart" text="like"></ui-button>
            <ui-button :type="['primary','rounded']" icon="close" text="close"
                       icon-position="right"></ui-button>
            <ui-button type="info" icon="envelope" text="mail"></ui-button>
          </div>
        </ui-panel>
      </ui-grid-item>
      <ui-grid-item space="4">
        <ui-panel>
          <h3 class="box-title">icon圆形按钮</h3>
          <div class="button-box">
            <ui-button circle :type="['default','outline']" icon="heart"></ui-button>
            <ui-button circle :type="['primary']" icon="close"></ui-button>
            <ui-button circle type="info" icon="envelope"></ui-button>
            <ui-button circle type="danger" icon="close"></ui-button>
          </div>
        </ui-panel>
      </ui-grid-item>
      <ui-grid-item space="4">
        <ui-panel>
          <h3 class="box-title">填充式按钮</h3>
          <div class="button-box">
            <ui-button :type="['default','outline','block']" text="block button"></ui-button>
          </div>
        </ui-panel>
      </ui-grid-item>
    </ui-grid-group>

    <ui-panel>
      <ui-table :order-list="orderList" type="bordered striped"></ui-table>
    </ui-panel>
  </div>
</template>

<script type="text/babel">
  const btnTypes = ['default', 'info', 'primary', 'success', 'danger', 'warning']

  export default {
    data(){
      return {
        btnTypes,
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
              Default: 'default',
              note: 'rounded:圆角,outline:描边,btn-block:填充'
            },
            {
              name: 'circle',
              description: '圆形按钮',
              type: 'Boolean',
              Default: 'false',
            },
            {
              name: 'text',
              description: '按钮的文本',
              type: 'String',
              Default: 'Button',
            },
            {
              name: 'disabled',
              description: '禁用，不可点',
              type: 'Boolean',
              Default: 'false',
            },
            {
              name: 'icon',
              description: '按钮的图标',
              type: 'String',
              Default: 'null',
            },
            {
              name: 'iconPosition',
              description: '图标的位置',
              type: 'String',
              Default: 'left',
              note: 'left:靠左,right:靠右'
            }
          ]
        }
      }
    },
    methods: {
      alertMsg(msg){
      }
    }
  }
</script>

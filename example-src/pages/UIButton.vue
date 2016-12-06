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
    </div>
</template>

<script type="text/babel">
  const btnTypes = ['default', 'info', 'primary', 'success', 'danger', 'warning']

  export default {
    data(){
      return {
        btnTypes
      }
    },
    methods: {
      alertMsg(msg){
      }
    }
  }
</script>

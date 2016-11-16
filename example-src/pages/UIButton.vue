<template>
    <div class="demo-page">
        <ui-heading :level="1">UIButton</ui-heading>
        <ui-panel>
            <div class="panel__heading" slot="header">
                Button
            </div>
            <h3>常规按钮</h3>
            <ui-button :type="[type]" v-for="type in ['primary','success','danger','warning','info']">
                {{type}}
            </ui-button>
            <h3>圆角按钮</h3>
            <ui-grid-group>
                <ui-grid-item v-for="type in ['primary','success','danger','warning','info']">
                    <ui-button :type="[type,'block','rounded']">
                        {{type}}
                    </ui-button>
                </ui-grid-item>
            </ui-grid-group>
        </ui-panel>
    </div>
</template>

<script type="text/babel">
  export default {
    pageConfig: {
      name: '按钮',
      sidebar: false
    }
  }
</script>

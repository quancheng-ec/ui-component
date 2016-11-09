<template>
<div class="demo-page">
  <ui-panel>
    <div class="panel__heading" slot="header">
      按钮组件
    </div>
    常规按钮
    <ui-grid-group>
      <ui-grid-item v-for="type in ['primary','success','danger','warning','info']">
        <ui-button :type="[type,'block']">
          {{type}}
        </ui-button>
      </ui-grid-item>
    </ui-grid-group>
    圆角按钮
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
}
</script>

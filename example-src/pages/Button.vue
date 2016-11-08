<template>
<div class="demo-page">
  <ui-panel>
    <div class="panel__heading" slot="header">
      按钮组件
      <router-link to="/">/</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/blog">blog</router-link>
    </div>
    <ui-heading :level="3">常规按钮</ui-heading>
    <ui-grid-group>
      <ui-grid-item v-for="type in ['primary','success','danger','warning','info']">
        <ui-button :type="[type,'block']">
          {{type}}
        </ui-button>
      </ui-grid-item>
    </ui-grid-group>
    <ui-heading :level="3">圆角按钮</ui-heading>
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

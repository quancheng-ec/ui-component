<template>
<div class="demo-page">
  <ui-heading :level="1">UIPanel</ui-heading>
  <ui-grid-group>
    <ui-grid-item>
      <ui-panel>
        <div class="panel__heading" slot="header">
          Default panel
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ui-panel>
    </ui-grid-item>
  </ui-grid-group>
</div>
</template>

<script type="text/babel">
export default {}
</script>

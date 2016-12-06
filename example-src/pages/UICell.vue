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
      ></ui-cell>
      <ui-cell
        title="Notifications"
        sub-title="isLink is set to true when link exists"
        arrow
        :on-click="handleClick"
      ></ui-cell>
    </ui-panel>
  </div>
</template>



<script type="text/babel">

	export default {
		data(){
			return {
				icon:'smile-o'
      }
    },
    methods:{
			handleClick(){
				alert(1)
      }
    }

	}

</script>

<template>
  <div class="demo-page">
    <ui-heading :level="1">UIModal</ui-heading>
    <ui-panel>
      <div class="panel__heading" slot="header">
        Default Modal
      </div>

      <button @click="onClick">点我</button>

      <ui-modal
        title="我是标题"
        :show="show"
        showCloseButton
        size="lg"
      >
      <div slot="content">我是内容</div>
      <div slot="foot-btn">
        <button type="button" class="btn btn-info waves-effect" data-dismiss="modal" @click="closeModal">Close</button>
      </div>
      </ui-modal>
    </ui-panel>
  </div>
</template>



<script type="text/babel">

	export default {
		data(){
			return {
				show: false
			}
		},
		methods: {
			onClick(){
				this.show=true;
			},
			closeModal(){
				this.show=false;
			}
		}
	}

</script>

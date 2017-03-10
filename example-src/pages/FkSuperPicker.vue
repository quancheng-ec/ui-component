<template>
  <div>
    <ui-button type="info" @click.native="accountPicker.show = true">open</ui-button>
    <fk-super-picker
      v-model="accountPicker.show"
      account-only
      :items="['account']"
      :chosen-list="accountPicker.chosenList"
      url="//fkadmin.dev.quancheng-ec.com/api/enterprise/pickerData"
    >
    </fk-super-picker>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        accountPicker: {
          show: false,
          chosenList: []
        }
      }
    }
  }
</script>
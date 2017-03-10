<template>
  <div>
    <ui-button type="info" @click.native="accountPicker.show = true">open</ui-button>
    <fk-super-picker
      v-model="accountPicker.show"
      account-only
      :items="['account']"
      :chosen-list="accountPicker.chosenList"
      url="//localhost:3000/api/enterprise/pickerData"
    >
    </fk-super-picker>
    <fk-tree-select
      horizontal
      account-only
      v-model="accountPicker.reportAccountId"
      label="直属上级"
      type="account"
      url="//localhost:3000/api/enterprise/pickerData"
    >

    </fk-tree-select>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        accountPicker: {
          show: false,
          chosenList: [],
          reportAccountId: '103170224164717001'
        }
      }
    }
  }
</script>
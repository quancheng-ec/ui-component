<template>
<div class="">
  <ui-panel>
    <ui-form>
      <ui-text-box label="textbox" v-model="form.input.value" validation-rules="form.input.validation">
      </ui-text-box>

      <ui-text-box label="textbox-with-addon" v-model="form.input.value" validation-rules="form.input.validation">
        <div slot="addon">
          选择日期
        </div>
      </ui-text-box>
      <ui-text-box label="textarea" multi-line v-model="form.textarea.value" validation-rules="form.textarea.validation">
      </ui-text-box>

      <ui-select label="select" :options="form.select.options" v-model="form.select.value" validation-rules="form.select.validation">
      </ui-select>


      <ui-select label="select-with-addon" :options="form.select.options" v-model="form.select.value" validation-rules="form.select.validation">
        <div slot="addon">
          选择一项
        </div>
      </ui-select>

      <code>
        {{form}}
      </code>
    </ui-form>
  </ui-panel>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: {
          value: '123',
          validation() {
            return {}
          }
        },
        textarea: {
          value: '123',
          validation() {
            return {}
          }
        },
        select: {
          options: [{
            text: 'apple',
            value: 'APPLE'
          }, {
            text: 'banana',
            value: 'BANANA'
          }],
          value: 'BANANA',
          validation() {
            return {}
          }
        }
      }
    }
  }
}
</script>

<template>
  <div>
    <ui-grid-group>
      <ui-grid-item :space="6"
                    v-for="isHorizontal in [false,true]">
        <ui-panel>
          <ui-form :horizontal="isHorizontal"
                   ref="form">
            <ui-text-box :horizontal="isHorizontal"
                         :editable="false"
                         :placeHolder="form.input.placeholder"
                         label="textbox"
                         v-model="form.input.value"
                         :validation-rules="form.input.validationRules">
            </ui-text-box>
  
            <ui-text-box :horizontal="isHorizontal"
                         :editable="false"
                         :placeHolder="form.input.placeholder"
                         label="textbox-with-addon"
                         v-model="form.input.value"
                         :validation-rules="form.input.validationRules">
              <div slot="addon">
                选择日期
              </div>
              <div slot="otherAddon">
                单位
              </div>
            </ui-text-box>
            <ui-text-box :horizontal="isHorizontal"
                         :placeHolder="form.textarea.placeholder"
                         label="textarea"
                         multi-line
                         v-model="form.textarea.value"
                         :validation-rules="form.textarea.validationRules">
            </ui-text-box>
  
            <ui-select :horizontal="isHorizontal"
                       label="select"
                       :options="form.select.options"
                       v-model="form.select.value"
                       :validation-rules="form.select.validationRules">
            </ui-select>
  
            <ui-select :horizontal="isHorizontal"
                       label="select-with-addon"
                       :options="form.select.options"
                       v-model="form.select.value"
                       :validation-rules="form.select.validationRules">
              <div slot="addon">
                选择一项
              </div>
            </ui-select>
  
            <code>
              input:{{form.input.value}}
              <br> textarea:{{form.textarea.value}}
              <br> select:{{form.select.value}}
            </code>
          </ui-form>
        </ui-panel>
      </ui-grid-item>
    </ui-grid-group>
    <ui-button @click.native="$refs.form[0].validate">validate</ui-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        input: {
          value: '',
          validationRules: 'required|email'
        },
        textarea: {
          value: '123',
          validationRules: 'max:16'
        },
        select: {
          options: [{
            text: 'apple',
            value: 'APPLE'
          }, {
            text: 'banana',
            value: 'BANANA'
          }, {
            text: 'pear',
            value: 'PEAR',
            disabled: true
          }],
          value: 'BANANA',
          validationRules: ''
        }
      }
    }
  }
}
</script>
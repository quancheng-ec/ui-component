import UiButton from './UiButton.vue'
import UiGridGroup from './UiGridGroup.vue'
import UiGridItem from './UiGridItem.vue'
import UiHeading from './UiHeading.vue'
import UiPanel from './UiPanel.vue'

export default {
  UiButton,
  UiGridGroup,
  UiGridItem,
  install(Vue) {
    Vue.component('UiButton', UiButton)
    Vue.component('UiGridGroup', UiGridGroup)
    Vue.component('UiGridItem', UiGridItem)
    Vue.component('UiHeading', UiHeading)
    Vue.component('UiPanel', UiPanel)
  }
}

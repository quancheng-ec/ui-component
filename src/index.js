import 'bootstrap/dist/css/bootstrap.css'
import './styles/eliteadmin/style.css'
import UiButton from './components/UiButton.vue'
import UiGridGroup from './components/UiGridGroup.vue'
import UiGridItem from './components/UiGridItem.vue'
import UiHeading from './components/UiHeading.vue'
import UiPanel from './components/UiPanel.vue'
import UiCell from './components/UiCell.vue'
import UiTable from './components/UiTable.vue'
import UiInfo from './components/UiInfo.vue'

export default {
  UiButton,
  UiGridGroup,
  UiGridItem,
  UiHeading,
  UiPanel,
  UiCell,
  UiTable,
  UiInfo,
  'install'(Vue) {
    Vue.component('UiButton', UiButton)
    Vue.component('UiGridGroup', UiGridGroup)
    Vue.component('UiGridItem', UiGridItem)
    Vue.component('UiHeading', UiHeading)
    Vue.component('UiPanel', UiPanel)
    Vue.component('UiCell', UiCell)
    Vue.component('UiTable', UiTable)
    Vue.component('UiInfo', UiInfo)
  }
}

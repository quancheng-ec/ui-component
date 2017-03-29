import UiButton from './components/UiButton.vue'
import UiGridGroup from './components/UiGridGroup.vue'
import UiGridItem from './components/UiGridItem.vue'
import UiHeading from './components/UiHeading.vue'
import UiPanel from './components/UiPanel.vue'
import UiCell from './components/UiCell.vue'
import UiTable from './components/UiTable.vue'
import UiInfo from './components/UiInfo.vue'
import UiModal from './components/UiModal.vue'
import UiForm from './components/UiForm.vue'
import UiTextBox from './components/UiTextBox.vue'
import UiSelect from './components/UiSelect.vue'
import UiTabs from './components/UiTabs.vue'
import UiConfirm from './components/UiConfirm'
import UiAlert from './components/UiAlert'
import UiDatePicker from './components/UiDatePicker.vue'
import UiToast from './components/UiToast'
import UiSwitcher from './components/UiSwitcher'
import UiCheckbox from './components/UiCheckbox'
import UiRadio from './components/UiRadio'
import UiDropdown from './components/UiDropdown.vue'

import FkDepartment from './components/FkDepartment.vue'
import FkSuperPicker from './components/FkSuperPicker.vue'
import FkTreeSelect from './components/FkTreeSelect.vue'
import FkUploader from './components/FkUploader.vue'
import FkAccountPicker from './components/FkAccountPicker.vue'

const QCUI = {
  UiButton,
  UiGridGroup,
  UiGridItem,
  UiHeading,
  UiPanel,
  UiCell,
  UiTable,
  UiInfo,
  UiModal,
  UiForm,
  UiTextBox,
  UiSelect,
  UiTabs,
  UiSwitcher,
  UiCheckbox,
  UiRadio,
  UiDropdown,
  FkDepartment,
  FkSuperPicker,
  FkTreeSelect,
  FkUploader,
  FkAccountPicker,
  install(Vue) {
    Vue.component('UiButton', UiButton)
    Vue.component('UiGridGroup', UiGridGroup)
    Vue.component('UiGridItem', UiGridItem)
    Vue.component('UiHeading', UiHeading)
    Vue.component('UiPanel', UiPanel)
    Vue.component('UiCell', UiCell)
    Vue.component('UiTable', UiTable)
    Vue.component('UiInfo', UiInfo)
    Vue.component('UiModal', UiModal)
    Vue.component('UiForm', UiForm)
    Vue.component('UiTextBox', UiTextBox)
    Vue.component('UiSelect', UiSelect)
    Vue.component('UiTabs', UiTabs)
    Vue.component('UiDatePicker', UiDatePicker)
    Vue.component('UiSwitcher', UiSwitcher)
    Vue.component('UiCheckbox', UiCheckbox)
    Vue.component('UiRadio', UiRadio)
    Vue.component('UiDropdown', UiDropdown)
    Vue.component('FkDepartment', FkDepartment)
    Vue.component('FkSuperPicker', FkSuperPicker)
    Vue.component('FkTreeSelect', FkTreeSelect)
    Vue.component('FkUploader', FkUploader)
    Vue.component('FkAccountPicker', FkAccountPicker)
    Object.defineProperties(Vue.prototype, {
      $confirmBox: {
        get() {
          return UiConfirm.bind(this)
        }
      },
      $alertBox: {
        get() {
          return UiAlert.bind(this)
        }
      },
      $toastBox: {
        get() {
          return UiToast.bind(this)
        }
      }
    })
  }
}

module.exports = QCUI

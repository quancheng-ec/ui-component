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
import UiPicker from './components/UiPicker.vue'

import FkMixin from './mixins/FkMixin.vue'
import FkDepartment from './components/FkDepartment.vue'
import FkSuperPicker from './components/FkSuperPicker.vue'
import FkTreeSelect from './components/FkTreeSelect.vue'
import FkTree from './components/FkTree.vue'
import FkUploader from './components/FkUploader.vue'
import FkAccountPicker from './components/FkAccountPicker.vue'
import FkLayout from './components/FkLayout.vue'

import SytLayout from './components/SytLayout.vue'

import Validator from './libs/validation'
import UiTimePicker from './components/UiTimePicker.vue'

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
  FkMixin,
  FkDepartment,
  FkSuperPicker,
  FkTree,
  FkTreeSelect,
  FkUploader,
  FkAccountPicker,
  FkLayout,
  Validator,
  UiPicker,
  SytLayout,
  UiTimePicker,
  install(Vue) {
    Vue.component('UiButton', UiButton)
    Vue.component('UiTimePicker', UiTimePicker)
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
    Vue.component('FkTree', FkTree)
    Vue.component('FkTreeSelect', FkTreeSelect)
    Vue.component('FkUploader', FkUploader)
    Vue.component('FkAccountPicker', FkAccountPicker)
    Vue.component('FkLayout', FkLayout)
    Vue.component('SytLayout', SytLayout)
    Vue.component('UiPicker', UiPicker)
    Object.defineProperties(Vue.prototype, {
      $validator: {
        get() {
          return Validator
        }
      },
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

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(QCUI)
}

module.exports = QCUI

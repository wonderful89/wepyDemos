import bgviewHelper from '@/components/bg-view-help'
import loadingHelper from '@/components/loading-help'
import toastHelper from '@/components/toast-help'

let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function showBgView() {
  if (_innerObj) {
    bgviewHelper.show()
    _innerObj.open = true;
    _innerObj.$apply()
  }
}

function showLoading() {
  if (_innerObj) {
    _innerObj.open = true;
    loadingHelper.show()
    _innerObj.$apply()
  }
}

function showToast(text = '', params = {
  duration: 1800
}) {
  if (_innerObj) {
    toastHelper.show(text, params)
    _innerObj.open = true;
    _innerObj.$apply()
    setTimeout(() => {
      _innerObj.open = false;
      _innerObj.$apply()
    }, params.duration)
  }
}

function hide() {
  if (_innerObj) {
    _innerObj.open = false;
    bgviewHelper.hide()
    loadingHelper.hide()
    _innerObj.$apply()
  }
}

export default {
  showBgView,
  showLoading,
  showToast,
  hide,
  setObj
}

import bgviewHelper from './bg-view-help'
import loadingHelper from './loading-help'
import toastHelper from './toast-help'
import alertHelper from './alert-help'

// let alertParams = alertHelper.params;
let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function showBgView() {
  if (_innerObj) {
    bgviewHelper.show(_innerObj)
    _innerObj.open = true;
    _innerObj.$apply()
  }
}

function showLoading() {
  if (_innerObj) {
    _innerObj.open = true;
    loadingHelper.show(_innerObj)
    _innerObj.$apply()
  }
}

function showToast(text = '', params = {
  duration: 1800
}) {
  if (_innerObj) {
    toastHelper.show(_innerObj, text, params)
    _innerObj.open = true;
    _innerObj.$apply()
  }
}

function showAlert(params) {
  if (_innerObj) {
    alertHelper.show(_innerObj, params)
    _innerObj.open = true;
    _innerObj.$apply()
  }
}

function hide() {
  if (_innerObj) {
    _innerObj.open = false;
    bgviewHelper.hide(_innerObj)
    loadingHelper.hide(_innerObj)
    alertHelper.hide(_innerObj)
    _innerObj.$apply()
  }
}

export default {
  showBgView,
  showLoading,
  showToast,
  showAlert,
  hide,
  setObj
}

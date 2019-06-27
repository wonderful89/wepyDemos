let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function show() {
  if (_innerObj) {
    _innerObj.open = true;
    _innerObj.$apply()
  }
}

function hide() {
  if (_innerObj) {
    _innerObj.open = false;
    _innerObj.$apply()
  }
}

export default {
  show,
  hide,
  setObj
}

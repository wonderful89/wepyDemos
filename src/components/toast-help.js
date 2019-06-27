let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function show(text = '这是默认的text', params = {
  duration: 1800
}) {
  if (_innerObj) {
    _innerObj.text = text;
    _innerObj.open = true;
    _innerObj.$apply()

    setTimeout(() => {
      hide()
    }, params.duration)
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
  setObj
}

let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

const _defaultParams = {
  text: '你好啊啊！！',
  confirm: () => {
    console.log('confirm action')
  },
  cancel: () => {
    console.log('cancel action')
  },
  buttons: ['取消', '确定']
}

function show(paramsObj = {}) {
  if (_innerObj) {
    _innerObj.open = true;
    _innerObj.buttonTexts = paramsObj.buttons || _defaultParams.buttons
    _innerObj.text = paramsObj.text || _defaultParams.text,
      _innerObj.cancel = paramsObj.cancel || _defaultParams.cancel,
      _innerObj.confirm = paramsObj.confirm || _defaultParams.confirm,
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

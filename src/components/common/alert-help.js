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

function show(page, paramsObj = {}) {
  page.$invoke('alert', 'show', {
    buttonTexts: paramsObj.buttons || _defaultParams.buttons,
    text: paramsObj.text || _defaultParams.text,
    cancel: paramsObj.cancel || _defaultParams.cancel,
    confirm: paramsObj.confirm || _defaultParams.confirm,
  })
  // if (_innerObj) {
  //   _innerObj.open = true;
  //   _innerObj.buttonTexts = paramsObj.buttons || _defaultParams.buttons
  //   _innerObj.text = paramsObj.text || _defaultParams.text,
  //     _innerObj.cancel = paramsObj.cancel || _defaultParams.cancel,
  //     _innerObj.confirm = paramsObj.confirm || _defaultParams.confirm,
  //     _innerObj.$apply()
  // }
}

function hide(page) {
  page.$invoke('alert', 'hide')
}

export default {
  show,
  hide,
  setObj
}

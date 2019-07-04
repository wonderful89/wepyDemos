let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function show(page, text = '这是默认的text', params = {
  duration: 1800
}) {
  page.$invoke('toast', 'show', text)
  setTimeout(() => {
    page.$invoke('toast', 'hide')
  }, params.duration)
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

let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function show(page) {
  page.$invoke('bgview', 'show')
}

function hide(page) {
  page.$invoke('bgview', 'hide')
}

export default {
  show,
  hide,
  setObj
}

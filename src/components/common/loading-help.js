let _innerObj;

function setObj(obj) {
  _innerObj = obj
}

function show(page) {
  page.$invoke('loading', 'show')
}

function hide(page) {
  page && page.$invoke('loading', 'hide')
}

export default {
  show,
  hide,
  setObj
}

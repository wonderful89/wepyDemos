const frameworkPages = {
  // 'Timer 定时器': 'pages/framework/timer',
  // 'Timer 定时器2': 'pages/framework/timer',

  'weui: list': '/example/button',
  'weui: button': '/example/button',
  'weui: flex': '/example/flex',
  'weui: grid': '/example/grid',
  'weui: actionsheet': '/example/actionsheet'
}

const apiPages = {
  'weui: list': '/example/button',
  'weui: button': '/example/button',
  '流式录音测试': 'slice_recoder'
}

const componentPages = {
  'weui: list': '/example/button'
}

const appPages = [
  'pages/framework/index',

  'pages/api/index',
  'pages/api/slice_recoder',

  'pages/comp/index',

  'pages/home',
  'pages/index',

  'example/grid',
  'example/list',
  'example/actionsheet',
  'example/button',
  'example/flex'
]

export default {
  frameworkPages,
  componentPages,
  apiPages,
  appPages
}

const frameworkPages = {
  // 'Timer 定时器': 'pages/framework/timer',
  // 'Timer 定时器2': 'pages/framework/timer',

  'weui: list': '/example/button',
  'weui: button': '/example/button',
  'weui: flex': '/example/flex',
  'weui: grid': '/example/grid',
  'weui: actionsheet': '/example/actionsheet',
  'Redux测试': 'redux',
  'Wepy 子组件传值测试': 'wepy-array'
}

const apiPages = {
  'weui: list': '/example/button',
  'weui: button': '/example/button',
  '流式录音测试': 'slice_recoder',
  '微信登录': 'wechat_login',
  '分享': 'share_info'
}

const componentPages = {
  'weui: list': '/example/button',
  'bgview': 'bgview',
  'common-view': 'common-view',
  'fontsize': 'fontsize',
  'map': 'map',
  'circle': 'circle',
  'photo': 'photo'
}

const appPages = [
  // 'pages/comp/photo',

  'pages/framework/index',
  'pages/framework/redux',
  'pages/framework/wepy-array',

  'pages/api/index',
  'pages/api/slice_recoder',
  'pages/api/wechat_login',
  'pages/api/share_info',

  'pages/comp/index',
  'pages/comp/bgview',
  'pages/comp/common-view',
  'pages/comp/fontsize',
  'pages/comp/map',
  'pages/comp/circle',
  'pages/comp/photo',

  'pages/home',
  'pages/index',

  'example/grid',
  'example/list',
  'example/actionsheet',
  'example/button',
  'example/flex'
]

// export default {
// frameworkPages,
// componentPages,
// apiPages,
// appPages
// }

module.exports = {
  frameworkPages,
  componentPages,
  apiPages,
  appPages
}

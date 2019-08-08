const frameworkPages = {
  'Redux测试': '/pages/framework/redux',
  'Wepy 子组件传值测试': '/pages/framework/wepy-array'
}

const apiPages = {
  '流式录音测试': '/pages/api/slice_recoder',
  '微信登录': '/pages/api/wechat_login',
  '分享': '/pages/api/share_info',
  '保存文件': '/pages/api/save_file',
  '全局文件测试': '/pages/api/global_env_test',
  '全局文件测试2': '/pages/api/global_env_test2'
}

const componentPages = {
  'editor': '/pages/comp/editor',
  'weui: list': '/example/list',
  'weui: button': '/example/button',
  'weui: flex': '/example/flex',
  'weui: grid': '/example/grid',
  'weui: actionsheet': '/example/actionsheet',

  'bgview': '/pages/comp/bgview',
  'common-view': '/pages/comp/common-view',
  'fontsize': '/pages/comp/fontsize',
  'map': '/pages/comp/map',
  'circle': '/pages/comp/circle',
  'photo': '/pages/comp/photo'
}

let appPages = [
  'pages/framework/index',
  'pages/api/index',
  'pages/comp/index',
  'pages/home',
  'pages/index',
]
_init(); // 执行初始化函数

function _init() {
  console.log(`_init pages`);
  let pages = [componentPages, frameworkPages, apiPages]
  pages.forEach(curP => {
    let componentPageValues = Object.values(curP)
    componentPageValues.map((value) => {
      let item = value.substring(1, value.length)
      appPages.push(item)
    })
  })
}

module.exports = {
  frameworkPages,
  componentPages,
  apiPages,
  appPages
}

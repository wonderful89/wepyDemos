let testUrl = 'https://baidu.com'

function changeUrl(newUrl) {
  g.testUrl = newUrl;
}
let g = {
  testUrl,
  changeUrl
}
export default g

import g from '@/libs/global'

function request() {
  let url = `request g.testUrl = ${g.testUrl}`;
  console.log(`url = ${url}`)
}

export default {
  request
}

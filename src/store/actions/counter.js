import {
  ASYNC_INCREMENT
} from '../types/counter'
import {
  createAction
} from 'redux-actions'

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
})

export const asyncInc2 = createAction(ASYNC_INCREMENT, (num) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
})

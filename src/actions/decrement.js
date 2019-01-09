import {DECREMENT} from '../ActionTypes'

export default function (payload) {
  return {
    type: DECREMENT,
    number: payload
  }
}
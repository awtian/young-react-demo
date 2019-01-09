import {INCREMENT} from '../ActionTypes'

export default function (payload) {
  return {
    type: INCREMENT,
    number: payload
  }
}
import {INCREMENT, DECREMENT} from '../ActionTypes'
const defaultState = {
  counter: 0
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter+action.number
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter-action.number
      }
    default:
      return state
  }
} 
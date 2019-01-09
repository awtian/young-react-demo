const defaultState = {heroes: [], loading: false, error: false}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_HEROES_LOADING':
        return {
          ...state,
          loading: true
        }
    case 'FETCH_HEROES_SUCCESS':
        return {
          ...state,
          loading: false,
          heroes: action.payload
        }
    case 'FETCH_HEROES_ERROR':
        return {
          ...state,
          loading: false,
          error: true
        }
    default:
      return state
  }
}
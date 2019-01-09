import axios from 'axios';

export default function () {
  return (dispatch) => {
    dispatch({type: 'FETCH_HEROES_LOADING'})
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({data}) => {
        dispatch({type: 'FETCH_HEROES_SUCCESS', payload: data})
      })
      .catch(err => {
        dispatch({type: 'FETCH_HEROES_ERROR'})
      })
  }
} 
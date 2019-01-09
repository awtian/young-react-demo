import {createStore, combineReducers} from 'redux';

//Reducers
import count from '../reducers/count'
import name from '../reducers/name'

const reducers = combineReducers({
  count, 
  name
})

const store = createStore(reducers);

export default store;
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

//Reducers
import count from '../reducers/count'
import name from '../reducers/name'
import api from '../reducers/api'


const reducers = combineReducers({
  count, 
  name,
  api
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;
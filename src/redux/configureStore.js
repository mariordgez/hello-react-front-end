import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting/greetingReducer';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(reducer, applyMiddleware(...combineMiddleware));

export default store;

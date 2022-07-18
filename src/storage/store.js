import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './rootReducer';

const store = createStore(reducer, applyMiddleware(logger));

export default store;
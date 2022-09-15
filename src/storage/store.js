import {legacy_createStore as createStore } from 'redux';
import reducer from './rootReducer';

const store = createStore(reducer);

export default store;
import {contentReducer} from '../storage/content/contentReducer';

import {iterfaceReducer} from '../storage/interface/interfaceReducer';

import { combineReducers } from 'redux'

const reducer = combineReducers({
  lists: contentReducer,
  interface: iterfaceReducer,
})

export default reducer;
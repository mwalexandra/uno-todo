import { contentReducer } from '../storage/content/contentReducer';
import { iterfaceReducer } from '../storage/interface/interfaceReducer';
import { modalsReducer } from '../storage/modals/modalsReducer';

import { combineReducers } from 'redux'

const reducer = combineReducers({
  lists: contentReducer,
  interface: iterfaceReducer,
  modals: modalsReducer,
})

export default reducer;
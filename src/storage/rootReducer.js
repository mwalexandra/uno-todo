import { contentReducer } from '../storage/content/contentReducer';
import { iterfaceReducer } from '../storage/interface/interfaceReducer';
import { modalsReducer } from '../storage/modals/modalsReducer';
import { settingsReducer } from '../storage/userSettings/settingsReducer';


import { combineReducers } from 'redux'

const reducer = combineReducers({
  lists: contentReducer,
  interface: iterfaceReducer,
  modals: modalsReducer,
  userSettings: settingsReducer,
})

export default reducer;
import { SHOW_SETTINGS, CHANGE_MODE } from './actions';


function showSettings (settingsShow) {
  return {
    type: SHOW_SETTINGS,
    payload: {
      settingsShow,
    }
  }  
}

function changeMode (mode) {
  return {
    type: CHANGE_MODE,
    payload: {
      mode,
    }
  }  
}

export { showSettings, changeMode }
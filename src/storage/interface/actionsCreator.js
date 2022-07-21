import { SHOW_PANEL_TODO, SHOW_MODAL, MODAL_INFO,
        SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIVE_TAB  } from './actions';

function showPanelTodo(show) {
  return {
    type: SHOW_PANEL_TODO,
    payload: {
      show,
    }
  }  
}

function showModal (showModal) {
  return {
    type: SHOW_MODAL,
    payload: {
      showModal,
    }
  } 
}

function showModalInfo (name, btnText, action, inputValue){
  return {
    type: MODAL_INFO,
    payload: {
      name,
      btnText,
      action,
      inputValue,
    }
  } 
}

function selectTodoId(id) {
  return {
    type: SELECT_TODO_ID,
    payload: {
      id,
    }
  }
}

function selectListId(id) {
  return {
    type: SELECT_LIST_ID,
    payload: {
      id,
    }
  }
}

function setActiveTab(tab) {
  return {
    type: SET_ACTIVE_TAB,
    payload: {
      tab,
    }
  }
}

export {showPanelTodo, showModal, showModalInfo,
        selectTodoId, selectListId, setActiveTab}
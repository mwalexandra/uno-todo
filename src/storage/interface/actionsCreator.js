import { SHOW_PANEL_TODO, SHOW_CHANGE_MODAL, SHOW_CONFIRM_MODAL, MODAL_INFO,
        SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIVE_TAB  } from './actions';

function showPanelTodo(show) {
  return {
    type: SHOW_PANEL_TODO,
    payload: {
      show,
    }
  }  
}

function showChangeModal (changeModal) {
  return {
    type: SHOW_CHANGE_MODAL,
    payload: {
      changeModal,
    }
  } 
}

function showConfirmModal (confirmModal) {
  return {
    type: SHOW_CONFIRM_MODAL,
    payload: {
      confirmModal,
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

export {showPanelTodo, showChangeModal, showConfirmModal, showModalInfo,
        selectTodoId, selectListId, setActiveTab}
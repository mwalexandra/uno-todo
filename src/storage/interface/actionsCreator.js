import { SHOW_PANEL_TODO, SHOW_MODAL,
        SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIVE_TAB  } from './actions';

function showPanelTodo(show) {
  return {
    type: SHOW_PANEL_TODO,
    payload: {
      show,
    }
  }  
}

function showModal (isModalActive) {
  return {
    type: SHOW_MODAL,
    payload: {
      isModalActive,
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

export {showPanelTodo, showModal, 
        selectTodoId, selectListId, setActiveTab}
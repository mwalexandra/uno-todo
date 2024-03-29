import {
  SHOW_PANEL_TODO, 
  SELECT_TODO_ID, 
	SELECT_LIST_ID, 
	SET_ACTIVE_TAB, 
	SEARCH_STRING,
} from './actions';


function showPanelTodo(panelShow) {
  return {
    type: SHOW_PANEL_TODO,
    payload: {
      panelShow,
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

function setSearchString (searchString) {
  return {
    type: SEARCH_STRING,
    payload: {
      searchString,
    }
  }
}

export { showPanelTodo, 
        selectTodoId, selectListId, 
        setActiveTab, setSearchString }
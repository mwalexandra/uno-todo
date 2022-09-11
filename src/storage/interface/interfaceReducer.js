import {
  SHOW_PANEL_TODO, 
  SELECT_TODO_ID, 
	SELECT_LIST_ID, 
	SET_ACTIVE_TAB, 
	SEARCH_STRING,
} from './actions';

export const initialInterfaceState = {
  panelShow: false,
  todoId: null,
  listId: null,
  tab: 'Todos',
  searchString: '',
};

function iterfaceReducer(state = initialInterfaceState, {type, payload}) {

  switch(type){

    case SHOW_PANEL_TODO:
      return {
        ...state,
        panelShow: payload.panelShow,
    }

    case SELECT_TODO_ID:
      return {
        ...state,
        todoId: payload.id,
    }

    case SELECT_LIST_ID:
      return {
        ...state,
        listId: payload.id,
    }

    case SET_ACTIVE_TAB:
      return {
        ...state,
        tab: payload.tab,
    }

    case SEARCH_STRING:
      return {
        ...state,
        searchString: payload.searchString,
      }

    default: return state;
  }
}

  export {iterfaceReducer};

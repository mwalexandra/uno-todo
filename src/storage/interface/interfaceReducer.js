import { SHOW_PANEL_TODO, SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIVE_TAB } from './actions';

const initialState = {
  show: false,
  todoId: 0,
  listId: 44444,
  tab: 'Todo',
};

function iterfaceReducer(state = initialState, {type, payload}) {

  switch(type){

    case SHOW_PANEL_TODO:
      return {
        ...state,
        show: payload.show,
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

    default: return state;
  }
}

  export {iterfaceReducer};

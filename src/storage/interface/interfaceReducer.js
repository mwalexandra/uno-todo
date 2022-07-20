import { SHOW_PANEL_TODO, SHOW_MODAL,
        SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIVE_TAB } from './actions';

const initialState = {
  show: false,
  todoId: 0,
  listId: 44444,
  tab: 'Todo',
  modal: {
    name: '', // 'New list', 'Add a task', 'Rename list'
    isActive: false,
    action: '', // addList, addTask, changeHeader
    btnText: '', // '+ Create', '+ Add', 'Rename'
    inputValue: '',
  }  
};

function iterfaceReducer(state = initialState, {type, payload}) {

  switch(type){

    case SHOW_PANEL_TODO:
      return {
        ...state,
        show: payload.show,
    }

    case SHOW_MODAL: 
      return {
        ...state,
        modal: {
          name: payload.name,
          isActive: payload.isActive,
          action: payload.action,
          btnText: payload.btnText,
          inputValue: payload.inputValue,
        }
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

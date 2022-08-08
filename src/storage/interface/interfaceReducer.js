import { SHOW_PANEL_TODO, SHOW_CHANGE_MODAL, SHOW_CONFIRM_MODAL, MODAL_INFO,
        SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIVE_TAB } from './actions';

const initialState = {
  show: false,
  todoId: null,
  listId: null,
  tab: 'Todo',
  changeModal: false,
  confirmModal: false,
  modal: {
    name: '', // 'New list', 'Add a task', 'Rename list', 'Are you sure?'
    action: '', // addList, deleteList, addTask, deleteTask, changeHeader
    btnText: '', // '+ Create', '+ Add', 'Rename', 'Delete'
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

    case SHOW_CHANGE_MODAL: 
      return {
        ...state,
        changeModal: payload.changeModal,
      }

    case SHOW_CONFIRM_MODAL: 
      return {
        ...state,
        confirmModal: payload.confirmModal,
    }  

    case MODAL_INFO:
      return {
        ...state,
        modal: {
          name: payload.name,
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

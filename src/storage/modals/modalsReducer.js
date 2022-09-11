import { SHOW_MODAL, MODAL_INFO } from './actions';

const initialModalsState = {
  modalShow: false,
  modal: {
    type: '', // change, confirm
    name: '', // 'New list', 'Add a task', 'Rename list', 'Are you sure?'
    action: '', // addList, deleteList, addTask, deleteTask, changeHeader
    btnText: '', // '+ Create', '+ Add', 'Rename', 'Delete'
    inputValue: '',
  },
}

function modalsReducer(state = initialModalsState, {type, payload}) {
  switch(type){

    case SHOW_MODAL: 
      return {
        ...state,
        modalShow: payload.modalShow,
    }  

    case MODAL_INFO:
      return {
        ...state,
        modal: {
          type: payload.type,
          name: payload.name,
          action: payload.action,
          btnText: payload.btnText,
          inputValue: payload.inputValue,
        }
      }

      default: return state;
  }
}

export {modalsReducer};
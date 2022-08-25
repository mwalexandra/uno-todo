import { SHOW_MODAL, MODAL_INFO } from './actions';

// modals: [
  //   addList = {
  //     title: 'New list',
  //     placeholder: 'Enter list title',
  //     btn: '+ Create',
  //     inputValue: '',
  //   },
  //   addTask = {
  //     title: 'Add a task',
  //     placeholder: 'Add a task',
  //     btn: '+ Add',
  //     inputValue: '',
  //   },
  //   renameList = {
  //     title: 'Rename list',
  //     placeholder: 'Rename list',
  //     btn: 'Rename',
  //     inputValue: '',
  //   },
  //   deleteList = {
  //     title: 'Are you sure?',
  //     text: 'List will be permanently deleted',
  //     btn: 'Delete',
  //   },
  //   deleteTask = {
  //     title: 'Are you sure?',
  //     text: 'Task will be permanently deleted',
  //     btn: 'Delete',
  //   },
  //   signOut = {
  //     title: 'Sign out',
  //     text: 'Are you sure you would like to sign out?',
  //     btn: 'Sign out',
  //   },
  // ],

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
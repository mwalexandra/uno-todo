import { SHOW_MODAL, MODAL_INFO } from './actions';

function showModal (modalShow) {
  return {
    type: SHOW_MODAL,
    payload: {
      modalShow,
    }
  } 
}

function showModalInfo (type, name, btnText, action, inputValue){
  return {
    type: MODAL_INFO,
    payload: {
      type,
      name,
      btnText,
      action,
      inputValue,
    }
  } 
}

export {showModal, showModalInfo}
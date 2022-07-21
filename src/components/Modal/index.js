import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showModal } from '../../storage/interface/actionsCreator'
import { changeHeader } from '../../storage/content/actionsCreator'
import { useState } from 'react';

function Modal(){

  const dispatch = useDispatch();

  const listId = useSelector(state => state.interface.listId)
  const list = useSelector(state => state.lists.content.find(list => list.id === listId))

  //modal 
  const isShownModal = useSelector(state => state.interface.showModal)

  const name = useSelector(state => state.interface.modal.name)
  const action = useSelector(state => state.interface.modal.action)
  const btnText = useSelector(state => state.interface.modal.btnText) 
  const inputValue = useSelector(state => state.interface.modal.inputValue) 
 
  const [ currentValue, setCurrentValue ] = useState(inputValue);

  function modalAction(){   // addList, addTask, changeHeader
    if(action === 'changeHeader'){
      dispatch(changeHeader(listId, currentValue)); }
    // } else if (action === 'addTask') {
    //   dispatch(addTask(listId));
    // } else if (action === 'addList') {
    //   dispatch(addList());
    // }
    dispatch(showModal(false));
  }


  return (
    <div className={`${style.modalWrapper} ${isShownModal ? style.activeModal : ''}`}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{name}</h3>
        <input
        className={style.modalInput}
          placeholder={name}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        ></input>
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showModal(false))}
          >Cancel</button>
          <button 
            className={style.addBtn}
            onClick={() => modalAction()}  
          >{btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {showModal} from '../../storage/interface/actionsCreator'
import {changeHeader} from '../../storage/content/actionsCreator'
import { useState } from 'react';

function Modal(){

  const dispatch = useDispatch();
  //modal 
  const name = useSelector(state => state.interface.modal.name)
  const isActive = useSelector(state => state.interface.modal.isActive)
  const action = useSelector(state => state.interface.modal.action)
  const btnText = useSelector(state => state.interface.modal.btnText)
  const inputValue = useSelector(state => state.interface.modal.inputValue)

  const listId = useSelector(state => state.interface.listId)
  
  //TODO currentValue undefined
  const [currentValue, setCurrentValue] = useState(inputValue);
  console.log(currentValue);

  function modalAction(){
    if(action === 'changeHeader'){
      renameList();
    }
  }

  function renameList(){
    dispatch(changeHeader(listId, currentValue));
    dispatch(showModal('', false));
  }

  return (
    <div className={`${style.modalWrapper} ${isActive ? style.activeModal : ''}`}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{name}</h3>
        <input
        className={style.modalInput}
          placeholder='Rename list'
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        ></input>
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showModal('', false, '', '', ''))}
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
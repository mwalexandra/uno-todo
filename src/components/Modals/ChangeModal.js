import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showChangeModal } from '../../storage/interface/actionsCreator'
import { changeHeader, todoAdd } from '../../storage/content/actionsCreator'
import { useState } from 'react';

function ChangeModal(){

  const dispatch = useDispatch();

  const listId = useSelector(state => state.interface.listId)

  //modal 
  const show = useSelector(state => state.interface.changeModal)
  const modal = useSelector(state => state.interface.modal)

  const [ currentValue, setCurrentValue ] = useState(modal.inputValue)

  function modalAction(value){   // addList, todoAdd, changeHeader
    if(modal.action === 'changeHeader'){
      dispatch(changeHeader(listId, value)); 
    } else if (modal.action === 'todoAdd') {
      dispatch(todoAdd(listId, value));}
    // } else if (action === 'addList') {
    //   dispatch(addList());
    // }
    setCurrentValue('');
    dispatch(showChangeModal(false));
  }


  return (
    <div className={`${style.modalWrapper} ${show ? style.activeModal : ''}`}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{modal.name}</h3>
        <input
          className={style.modalInput}
          placeholder={modal.name}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showChangeModal(false))}
          >Cancel</button>
          <button 
            disabled={!currentValue}
            className={style.addBtn}
            onClick={() => modalAction(currentValue)}  
          >{modal.btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeModal;
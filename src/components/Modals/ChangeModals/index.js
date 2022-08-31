import { useDispatch, useSelector } from 'react-redux';
import style from '../index.module.css'
import { showModal } from '../../../storage/modals/actionsCreator'
import { changeHeader, todoAdd, addList } from '../../../storage/content/actionsCreator'
import { useState } from 'react';

function ChangeModals () {

  const dispatch = useDispatch(),
        modal = useSelector(state => state.modals.modal),
        mode = useSelector(state => state.interface.settings.mode),
        theme = useSelector(state => state.interface.settings[mode]),
        tab = useSelector(state => state.interface.tab),
        listId = useSelector(state => state.interface.listId),
        inputValue = useSelector(state => state.modals.modal.inputValue),
        [ currentValue, setCurrentValue ] = useState(inputValue) 
  
  function modalAction(value){
    if(modal.action === 'changeHeader'){
      dispatch(changeHeader(listId, value)); 
    } else if (modal.action === 'todoAdd') {
      const important = tab === 'Importants' ? true : false
      dispatch(todoAdd(listId, value, important))
    } else if (modal.action === 'addList') {
      dispatch(addList(value)); 
    }
    setCurrentValue('');
    dispatch(showModal(false));
  } 
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{modal.name}</h3>
        <input
            type='text'
            className={style.modalInput}
            placeholder={modal.name}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showModal(false))}
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

export default ChangeModals;
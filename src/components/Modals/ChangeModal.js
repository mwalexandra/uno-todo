import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showChangeModal, selectListId } from '../../storage/interface/actionsCreator'
import { changeHeader, todoAdd, addList } from '../../storage/content/actionsCreator'
import { useState } from 'react';

function ChangeModal(){

  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab)

  const listId = useSelector(state => state.interface.listId)
  const lists = useSelector(state => state.lists.content)

  //modal 
  const show = useSelector(state => state.interface.changeModal)
  const modal = useSelector(state => state.interface.modal)
  const inputValue = useSelector(state => state.interface.modal.inputValue)

  const [ currentValue, setCurrentValue ] = useState(inputValue) 


  function modalAction(value){   // addList, todoAdd, changeHeader
    if(modal.action === 'changeHeader'){
      dispatch(changeHeader(listId, value)); 
    } else if (modal.action === 'todoAdd') {
      const important = tab === 'Importants' ? true : false
      dispatch(todoAdd(listId, value, important))
    } else if (modal.action === 'addList') {
      dispatch(addList(value)); // TODO thunk !! внутри reducer (поменять id листа)
    }
    setCurrentValue('');
    dispatch(showChangeModal(false));
  } 
  
  // set listId after adding a first list
  if(!listId){
    if(lists.length !== 0){
      dispatch(selectListId(lists[lists.length - 1].id))
    }
  }
  
  return (
    <div className={`${style.modalWrapper} ${show ? style.activeModal : ''}`}>
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
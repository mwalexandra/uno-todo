import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showModal } from '../../storage/interface/actionsCreator'
import { changeHeader, todoAdd } from '../../storage/content/actionsCreator'
import { useState } from 'react';

function ChangeModal(){

  const dispatch = useDispatch();

  const listId = useSelector(state => state.interface.listId)
  const list = useSelector(state => state.lists.content.find(list => list.id === listId))

  //modal 
  const show = useSelector(state => console.log(state.interface.showModal.changeModal))
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
    dispatch(showModal(false, false));
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
        ></input>
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showModal(false, false))}
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
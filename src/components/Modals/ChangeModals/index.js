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
    <>
      <input
          type='text'
          className={`${style.modalInput} ${mode === 'Light' ? style.light : style.dark}`}
          style={{
            backgroundColor: theme.surfaceVariantColor,
            color: theme.onSurfaceColor,
            borderBottom: `1px solid ${theme.onSurfaceLowBrush}`
          }}
          placeholder={modal.name}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
      <div className={style.btnWrapper}>
        <button
          className={style.cancelBtn}
          style={{
            color: theme.primaryColor,
          }}
          onClick={() => dispatch(showModal(false))}
        >Cancel</button>
        <button 
          className={style.addBtn}
          disabled={!currentValue}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.onPrimaryColor,
          }}
          onClick={() => modalAction(currentValue)}  
        >{modal.btnText}</button>
      </div>
    </>
  )
}

export default ChangeModals;
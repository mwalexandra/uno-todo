import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showModal } from '../../storage/modals/actionsCreator'
import { todoDelete, deleteList } from '../../storage/content/actionsCreator'
import { showPanelTodo, selectTodoId, selectListId } from '../../storage/interface/actionsCreator'
import { changeHeader, todoAdd, addList } from '../../storage/content/actionsCreator'
import { useState } from 'react';


function Modals () {

  const dispatch = useDispatch()

  const tab = useSelector(state => state.interface.tab)
  const lists = useSelector(state => state.lists.content)

  let listId = useSelector(state => state.interface.listId)
  let todoId = useSelector(state => state.interface.todoId) 

  const todos = useSelector(state => state.lists.content.find(list => list.id === listId)?.todos)

    if(!lists){
      listId = 0
    } else if (!todos){
      todoId = 0
    }

  //modal 
  const modal = useSelector(state => state.modals.modal)
  const inputValue = useSelector(state => state.modals.modal.inputValue)

  const [ currentValue, setCurrentValue ] = useState(inputValue) 
// TODO разделить логику на разные компоненты
  function modalAction(value){   // addList, todoAdd, changeHeader
    if(modal.action === 'changeHeader'){
      dispatch(changeHeader(listId, value)); 
    } else if (modal.action === 'todoAdd') {
      const important = tab === 'Importants' ? true : false
      dispatch(todoAdd(listId, value, important))
    } else if (modal.action === 'addList') {
      dispatch(addList(value)); 
    }
    else if(modal.action === 'deleteTask'){
      dispatch(todoDelete(listId, todoId))
      dispatch(selectTodoId(null))
      dispatch(showPanelTodo(false))
    } else if (modal.action === 'deleteList') {
      const deleteListIndex = lists.indexOf(lists.find(list => list.id === listId))
      dispatch(deleteList(listId));
      if(lists.length > 1){
        if(deleteListIndex !== 0) {
          dispatch(selectListId(lists[deleteListIndex-1].id))
        } else {
          dispatch(selectListId(lists[1].id))
        }
      } else {
        dispatch(selectListId(null))
      }
    } 
    setCurrentValue('');
    dispatch(showModal(false));
  } 
// фабрика для модальных окон
  function modalSwitcher(){
    switch(modal.type) {
      case 'confirm':
        return (
          <p className={style.modalText}>{modal.inputValue}</p>
        )  
      case 'change':
        return (
          <input
            type='text'
            className={style.modalInput}
            placeholder={modal.name}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        ) 
      default: return undefined
    }
  }

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{modal.name}</h3>

          {
            modalSwitcher()
          }  

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

export default Modals;
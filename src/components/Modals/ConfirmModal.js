import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { showConfirmModal } from '../../storage/interface/actionsCreator'
import { todoDelete, deleteList } from '../../storage/content/actionsCreator'
import { showPanelTodo, selectTodoId, selectListId } from '../../storage/interface/actionsCreator'
import { useEffect } from 'react';


function ConfirmModal(){

  const dispatch = useDispatch();

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
  const isShownModal = useSelector(state => state.interface.confirmModal)
  const modal = useSelector(state => state.interface.modal)

  function modalAction(){   // deleteTodo, deleteList
    if(modal.action === 'deleteTask'){
      dispatch(todoDelete(listId, todoId))
      dispatch(selectTodoId(0))
      dispatch(showPanelTodo(false))
    } else if (modal.action === 'deleteList') {
      dispatch(deleteList(listId));
      dispatch(selectListId(0))
    } 
    dispatch(showConfirmModal(false));
  }
 

  return (
    <div className={`${style.modalWrapper} ${ isShownModal ? style.activeModal : '' }`}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{modal.name}</h3>
        <p
        className={style.modalText}
        >{modal.inputValue}</p>
        <div className={style.btnWrapper}>
          <button 
            className={style.cancelBtn}
            onClick={() => dispatch(showConfirmModal(false))}
          >Cancel</button>
          <button 
            className={style.confirmBtn}
            onClick={() => modalAction()}  
          >{modal.btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal;
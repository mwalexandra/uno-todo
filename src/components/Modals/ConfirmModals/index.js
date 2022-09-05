import { useDispatch, useSelector } from 'react-redux';
import style from '../index.module.css'
import { showModal } from '../../../storage/modals/actionsCreator'
import { todoDelete, deleteList } from '../../../storage/content/actionsCreator'
import { showPanelTodo, selectTodoId, selectListId } from '../../../storage/interface/actionsCreator'


function ConfirmModals(){

  let listId = useSelector(state => state.interface.listId),
      todoId = useSelector(state => state.interface.todoId) 
      
  const dispatch = useDispatch(),
        modal = useSelector(state => state.modals.modal),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]),
        tab = useSelector(state => state.interface.tab),
        lists = useSelector(state => state.lists.content),
        todos = useSelector(state => state.lists.content.find(list => list.id === listId)?.todos)


    if(!lists){
      listId = 0
    } else if (!todos){
      todoId = 0
    }

  function modalAction(){ 
    if(modal.action === 'deleteTask'){
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
    dispatch(showModal(false));
  } 

    return (
      <>
        <p 
          className={style.modalText}
          style={{ color: theme.onSurfaceLowBrush }}
        >{modal.inputValue}</p>
        <div className={style.btnWrapper}>
          <button 
            style={{
              color: theme.primaryColor,
              backgroundColor: 'transparent',
            }}
            onClick={() => dispatch(showModal(false))}
          >Cancel</button>
          <button 
            className={style.addBtn}
            style={{
              backgroundColor: theme.errorColor,
              color: theme.onPrimaryColor,
            }}
            onClick={() => modalAction()}  
          >{modal.btnText}</button>
        </div>
      </>
  )
    
}

export default ConfirmModals;
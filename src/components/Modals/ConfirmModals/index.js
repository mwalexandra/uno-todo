import { useDispatch, useSelector } from 'react-redux';
import style from '../index.module.css'
import { showModal } from '../../../storage/modals/actionsCreator'
import { todoDelete, deleteList } from '../../../storage/content/actionsCreator'
import { showPanelTodo, selectTodoId } from '../../../storage/interface/actionsCreator'


function ConfirmModals(){
  const dispatch = useDispatch();

  const listId = useSelector(state => state.interface.listId),
        todoId = useSelector(state => state.interface.todoId),
        modal = useSelector(state => state.modals.modal),
        mode = useSelector(state => state.userSettings.settings.mode),
        theme = useSelector(state => state.userSettings.settings[mode]);

  function modalAction(){ 
    if(modal.action === 'deleteTask'){
      dispatch(todoDelete(listId, todoId))
      dispatch(selectTodoId(null))
    } else if (modal.action === 'deleteList') {
      dispatch(deleteList(listId));
    } 
    dispatch(showPanelTodo(false))
    dispatch(showModal(false))
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
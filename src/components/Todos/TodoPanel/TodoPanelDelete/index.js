import style from './index.module.css'
import { useShowDate } from '../../../../helpers'

import { showPanelTodo } from '../../../../storage/interface/actionsCreator'
import { showModal, showModalInfo } from '../../../../storage/modals/actionsCreator'
import { useDispatch, useSelector } from 'react-redux';

function TodoPanelDelete(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)

  const todoId = useSelector(state => state.interface.todoId)  

  const createTodoDate = useSelector(state => state.lists
                                        .content.find(list => list.id === selectedListId)
                                        ?.todos.find(todo => todo.id === todoId)?.createDate)


  function showDeleteModal(){
    dispatch(showModal(true));
    dispatch(showModalInfo ('confirm', 'Are you sure?', 'Delete', 'deleteTask', 'Task will be permanently deleted'));
  }

  return (
    <div className={style.todoPanelDeleteWrapper}>
      <span 
        className={style.todoPanelArrow}
        onClick={() => dispatch(showPanelTodo(false))}
      ></span>
      <p>Created {useShowDate(createTodoDate)}</p>
      <span 
        className={style.todoPanelDelete}
        onClick={() => showDeleteModal()}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;
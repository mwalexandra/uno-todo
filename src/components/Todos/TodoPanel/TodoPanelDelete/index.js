import style from './index.module.css'
import { useShowDate } from '../../../../helpers'

import { showPanelTodo, selectTodoId } from '../../../../storage/interface/actionsCreator'
import { todoDelete } from '../../../../storage/content/actionsCreator'
import { useDispatch, useSelector } from 'react-redux';

function TodoPanelDelete(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)

  const todoId = useSelector(state => state.interface.todoId)  

  const createTodoDate = useSelector(state => state.lists
                                        .content.find(list => list.id === selectedListId)
                                        .todos.find(todo => todo.id === todoId)?.createDate)

  function deleteTodo(){
    dispatch(todoDelete(selectedListId, todoId));
    dispatch(selectTodoId(0));
    dispatch(showPanelTodo(false));
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
        onClick={deleteTodo}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;
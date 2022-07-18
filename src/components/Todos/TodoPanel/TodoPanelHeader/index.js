import style from './index.module.css'

import TodoImportant from '../../TodosContainer/TodoList/TodoBox/TodoImportant'
import { useDispatch, useSelector } from 'react-redux'
import { todoComplete, changeTitle } from '../../../../storage/content/actionsCreator'

function TodoPanelHeader(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)
  const todoId = useSelector(state => state.interface.todoId)

  const title = useSelector(state => 
                              state.lists.content.find(list => list.id === selectedListId)
                              .todos.find(todo => todo.id === todoId)?.title)

  const completed = useSelector(state => 
                                  state.lists.content.find(list => list.id === selectedListId)
                                  .todos.find(todo => todo.id === todoId)?.completed)

  return (
    <div className={style.todoPanelHeader}>
      <input 
        type='checkbox' 
        value={completed} 
        checked={completed} 
        onChange={()=> dispatch(todoComplete(selectedListId, todoId))}
      />

      <input 
        type='text'  
        value={title} 
        onChange={(e)=> dispatch(changeTitle(selectedListId, todoId, e.target.value))} 
      />

      <TodoImportant todoId={todoId} />

    </div>
  )
}

export default TodoPanelHeader;
import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {changeDate} from '../../../../storage/content/actionsCreator'

function TodoPanelDate(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId
  )

  const selectedTodoId = useSelector(
    state => state.interface.todoId
  )

  const date = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)
        .todos.find( todoItem => selectedTodoId === todoItem.id)?.date
  )

  return (
    <div className={style.todoPanelDate}>
      <input 
        type='date' 
        value={date}
        onChange={(e) => dispatch(changeDate(selectedListId, selectedTodoId, e.target.value))}
        /> 
    </div>
  )
}

export default TodoPanelDate;
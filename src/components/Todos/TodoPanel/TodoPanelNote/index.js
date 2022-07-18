import style from './index.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { changeNote } from '../../../../storage/content/actionsCreator'

function TodoPanelNote(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)
  const todoId = useSelector(state => state.interface.todoId)

  const note = useSelector(state => 
                              state.lists.content.find(list => list.id === selectedListId)
                              .todos.find(todo => todo.id === todoId)?.note)
  
  return (
    <div className={style.todoPanelNote}>
      <textarea  
        className={style.todoPanelTextarea}
        placeholder='Add Note'
        onChange={(e)=> dispatch(changeNote(selectedListId, todoId, e.target.value))}
        value={note}
      ></textarea>
    </div>
  )
}

export default TodoPanelNote;
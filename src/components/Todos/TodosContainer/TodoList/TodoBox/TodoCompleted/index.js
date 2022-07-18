import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {todoComplete} from '../../../../../../storage/content/actionsCreator.js'

function TodoCompleted({todoId}) {

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.lists.content.find(list => list.selected).id)

  const completed = useSelector(
    state => state.lists.content.find(
      list => list.id === selectedListId).todos.find(
        todoItem => todoId === todoItem.id).completed
  )

  return(
    <input 
        type='checkbox'
        onClick = {(e) => e.stopPropagation()}
        onChange= {() => dispatch(todoComplete(selectedListId, todoId))}
        value={completed}
        checked={completed}
      />
  )
}

export default TodoCompleted;


    // <input 
    //     type='checkbox'
    //     onClick = {(e) => e.stopPropagation()}
    //     onChange = {() => setIsCompleted(!isCompleted)}
    //     checked={isCompleted}
    //     value={isCompleted}
    //   />
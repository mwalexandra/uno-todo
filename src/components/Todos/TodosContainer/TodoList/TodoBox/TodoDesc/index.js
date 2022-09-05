import style from './index.module.css'
import {useShowDate} from '../../../../../../helpers'
import { useSelector } from 'react-redux';

function TodoDesc({todoId}) {

  const selectedListId = useSelector(
    state => state.interface.listId
  )

  const todo = useSelector(
    state => state.lists.content.find(
      list => list.id === selectedListId
    ).todos.find(todoItem => todoId === todoItem.id)
  )

  const mode = useSelector(state => state.userSettings.settings.mode)
  const theme = useSelector(state => state.userSettings.settings[mode])

	return (
    <div className={style.todoDescr}>
      <h2
        style={{
          color: theme.onSurfaceColor,
        }} 
      >{todo.title}</h2>
      <p
        style={{
          color:theme.onSurfaceMediumBrush,
        }}
      >{todo.note} - {useShowDate(todo.date)}</p>
    </div>
	)
}
export default TodoDesc;
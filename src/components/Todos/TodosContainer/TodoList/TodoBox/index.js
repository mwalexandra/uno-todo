
import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';
import { useDispatch, useSelector } from 'react-redux';
import {showPanelTodo, selectTodoId} from '../../../../../storage/interface/actionsCreator.js'

function TodoBox({todoId}) {

const dispatch = useDispatch();

const isShownPanelTodo = useSelector(state => state.interface.panelShow);
const selectedTodoId = useSelector(state => state.interface.todoId);

const mode = useSelector(state => state.userSettings.settings.mode)
const theme = useSelector(state => state.userSettings.settings[mode])

  function editTodo() {
    dispatch(selectTodoId(todoId))

    if (todoId === selectedTodoId) {
      dispatch(showPanelTodo(!isShownPanelTodo));
    } else {
      dispatch(showPanelTodo(true));
    }
  }

  return (
    <li 
      className={style.todoItem} 
      style={
        todoId !== selectedTodoId 
        ? {backgroundColor: theme.surfaceColor}
        : {backgroundColor: theme.onSurfaceLowBrush}
        }
      onClick={editTodo}
    >

      <TodoCompleted
        todoId={todoId}
      />

      <TodoDesc 
        todoId={todoId} 
      />

      <TodoImportant 
        todoId={todoId}
      />
      
    </li>
  )
}

export default TodoBox;
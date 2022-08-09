
import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';
import { useDispatch, useSelector } from 'react-redux';
import {showPanelTodo, selectTodoId} from '../../../../../storage/interface/actionsCreator.js'

function TodoBox({todoId}) {

const dispatch = useDispatch();

const isShownPanelTodo = useSelector(state => state.interface.show);
const selectedTodoId = useSelector(state => state.interface.todoId);

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
      className={`${style.todoItem} ${todoId === selectedTodoId ? style.selected : ''}`}
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
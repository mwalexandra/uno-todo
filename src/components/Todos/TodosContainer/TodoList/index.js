import TodoBox from './TodoBox'
import style from './index.module.css'
import { useSelector } from 'react-redux';

function TodoList() {

  const selectedListId = useSelector(
    state => state.interface.listId
  )

  const todos = useSelector(
    state => 
      state.lists.content.find(list => list.id === selectedListId).todos
  )

  const tab = useSelector(state => state.interface.tab);

  const completedTodos = useSelector(
    state => 
      state.lists.content.find( list =>  list.id === selectedListId)
      .todos.filter(todo => todo.completed)
  )

  let renderTodos = [];

  if(tab === 'Completed'){
    renderTodos = completedTodos;
  } else {
    renderTodos = todos;
  }

  return (
    <ul className={style.todoList}>
      {renderTodos.map(todo => {
        return <TodoBox
                  key={todo.id}
                  todoId = {todo.id}
                />
      })}
    </ul>
  )
}

export default TodoList;
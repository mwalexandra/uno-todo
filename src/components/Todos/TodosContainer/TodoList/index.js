import TodoBox from './TodoBox'
import style from './index.module.css'
import { useSelector } from 'react-redux';

function TodoList() {

  const selectedListId = useSelector(
    state => state.interface.listId
  )

  const todos = useSelector(
    state => 
      state.lists.content.find(list => list.id === selectedListId)?.todos
  )

  const tab = useSelector(state => state.interface.tab);

  const completedTodos = useSelector(
    state => 
      state.lists.content.find(list =>  list.id === selectedListId)?.todos.filter(todo => todo.completed)
  )

  const importantsTodos = useSelector(
    state => 
      state.lists.content.find(list =>  list)?.todos.filter(todo => todo.important)
  )

  const allTodos = []
  useSelector(
    state => state.lists.content.forEach(
      list => allTodos.concat(list.todos)
    )
  )

  let renderTodos = [];

  if(tab === 'Completed'){
    renderTodos = completedTodos;
  } else if (tab === 'Importants') {
    renderTodos = importantsTodos;
  } else if (tab === 'Todos') {
    renderTodos = allTodos;
  } else {
    renderTodos = todos;
  }

  return (

      <ul className={style.todoList}>
          {
            renderTodos.map(todo => {
            return <TodoBox
                      key={todo.id}
                      todoId = {todo.id}
                    />
            })
          }
        </ul>

  )
}

export default TodoList;
import TodoBox from './TodoBox'
import style from './index.module.css'
import { useSelector } from 'react-redux';
import Placeholder from '../../../Placeholder';


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
      state.lists.content.find(list =>  list.id === selectedListId)?.todos.filter(todo => todo.important)
  )

  const searchString = useSelector(state => state.interface.searchString)
  
  let renderTodos = [];

  if(searchString){
    renderTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchString.toLowerCase()))
  } else {
    if(tab === 'Completed'){
      renderTodos = completedTodos;
    } else if (tab === 'Importants') {
      renderTodos = importantsTodos;
    } else {
      renderTodos = todos;
    }
  }

  return (

      <ul className={style.todoList}>

        { !renderTodos || renderTodos.length === 0 
          ? <Placeholder name={'Tasks'}/>
          : renderTodos.map(todo => {
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
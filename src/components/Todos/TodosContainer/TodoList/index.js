import TodoBox from './TodoBox'
import style from './index.module.css'
import { useSelector } from 'react-redux';
import Placeholder from '../../../Placeholder';
import TabSwitcher from '../TabSwitcher'

function TodoList() {

  const selectedListId = useSelector(state => state.interface.listId),
        todos = useSelector(state => 
            state.lists.content.find(list => list.id === selectedListId)?.todos),
        tab = useSelector(state => state.interface.tab),
        completedTodos = useSelector(state => 
            state.lists.content.find(list =>  list.id === selectedListId)?.todos.filter(todo => todo.completed)),
        importantsTodos = useSelector(state => 
            state.lists.content.find(list =>  list.id === selectedListId)?.todos.filter(todo => todo.important)),
        searchString = useSelector(state => state.interface.searchString);
  
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

 if(!renderTodos || renderTodos.length === 0){  
  return <Placeholder name={'Tasks'}/>
 } else {
  if (tab === 'Importants' || searchString){
    return (
      <ul className={style.todoList}>
        { renderTodos.map(todo => {
          return <TodoBox
                    key={todo.id}
                    todoId = {todo.id}
                  />
          })
        }
      </ul> 
    )
  } else {
    return (
      <>
        <TabSwitcher />
        <ul className={style.todoList}>
          { renderTodos.map(todo => {
            return <TodoBox
                      key={todo.id}
                      todoId = {todo.id}
                    />
            })
          }
        </ul> 
      </>
    )
  }
 }
}

export default TodoList;
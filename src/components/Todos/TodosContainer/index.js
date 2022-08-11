import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import TabSwitcher from './TabSwitcher'
import { useSelector } from 'react-redux';
import Placeholder from '../../Placeholder';

function TodosContainer() {

  const showPanelTodo = useSelector(state => state.interface.show);

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  console.log(selectedListId);

  const todos = useSelector(
    state => 
      state.lists.content.find(list => list.id === selectedListId)?.todos
  )

  const tab = useSelector(state => state.interface.tab)

  return (
    <>
      <main className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>

      { 
        !todos || todos.length === 0 
        ? <Placeholder name={'task'}/>
        : <section className={style.todosSection}>
            <TodoListHeader />
            {
              tab !== 'Importants' ? <TabSwitcher /> : <div></div>
            }
            <TodoList />
            <AddTodo />
          </section>
      }
      </main>
    </>
  )
}

export default TodosContainer;
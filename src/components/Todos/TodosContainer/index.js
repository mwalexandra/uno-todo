import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import TabSwitcher from './TabSwitcher'
import { useSelector } from 'react-redux';

function TodosContainer() {

  const showPanelTodo = useSelector(state => state.interface.panelShow);
  const tab = useSelector(state => state.interface.tab)
  const searchString = useSelector(state => state.interface.searchString)

  return (
    <>
      <main className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>
      <section className={style.todosSection}>
        <TodoListHeader />
        {
          tab === 'Importants' || searchString
          ? undefined : <TabSwitcher /> 
        }
        <TodoList />
        <AddTodo />
      </section>
      </main>
    </>
  )
}

export default TodosContainer;
import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'

import { useSelector } from 'react-redux';

function TodosContainer() {

  const showPanelTodo = useSelector(state => state.interface.panelShow);

  return (
    <>
      <main className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>
      <section className={style.todosSection}>
        <TodoListHeader />
        <TodoList />
        <AddTodo />
      </section>
      </main>
    </>
  )
}

export default TodosContainer;
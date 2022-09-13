import style from './index.module.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoListHeader from './TodoListHeader';
import TabSwitcher from './TabSwitcher';

import { useSelector } from 'react-redux';

function TodosContainer() {

  const showPanelTodo = useSelector(state => state.interface.panelShow),
        tab = useSelector(state => state.interface.tab),
        searchString = useSelector(state => state.interface.searchString);


  return (
    <>
      <div className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>
        <section className={style.todosSection}>
          <TodoListHeader />
          {
            tab === 'Importants' || searchString
              ? undefined
              : <TabSwitcher />
          }
          <TodoList />
          <AddTodo />
        </section>
      </div>
    </>
  )
}

export default TodosContainer;
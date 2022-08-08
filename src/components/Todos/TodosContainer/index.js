import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import { useDispatch, useSelector } from 'react-redux';
import {setActiveTab} from '../../../storage/interface/actionsCreator'
import Placeholder from '../../Placeholder';

function TodosContainer() {

  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab);
  const showPanelTodo = useSelector(state => state.interface.show);

  const selectedListId = useSelector(
    state => state.interface.listId
  )

  //console.log(selectedListId);

  const todos = useSelector(
    state => 
      state.lists.content.find(list => list.id === selectedListId)?.todos
  )

  //console.log(todos);

  return (
    <>
      <main className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>

      {
        todos.length === 0 
        ? <Placeholder name={'task'}/>
        : <section className={style.todosSection}>

            <TodoListHeader />
            <div>
            {/* TODO вынести в отдельный компонент switcher */}
              <button
                className={`${style.todosBtn} ${tab === 'Todo' ? style.active : ''}`}
                onClick={() => dispatch(setActiveTab('Todo'))}
              >To Do</button>
              <button
                className={`${style.todosBtn} ${tab === 'Completed' ? style.active : ''}`}
                onClick={() => dispatch(setActiveTab('Completed'))}
              >Completed</button>
            </div>
            <TodoList />

          <AddTodo />
        </section>
      }
      </main>
    </>
  )
}

export default TodosContainer;
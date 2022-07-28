import style from './index.module.css';
import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel'
import { useSelector } from 'react-redux';

function Todos() {

  const tab = useSelector(state => state.interface.tab);

  return (
    <>
      <div className={`${style.todos} ${tab === 'Importants' ? style.importantTodos : ''}`}>
        <TodosContainer /> 
        <TodoPanel />
      </div>
    </>
  )
}

export default Todos;
import style from './index.module.css';
import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel'
import { useSelector } from 'react-redux';

function Todos() {

  return (
    <div className={style.todos}>
      <TodosContainer /> 
      <TodoPanel />
    </div>
  )
}

export default Todos;
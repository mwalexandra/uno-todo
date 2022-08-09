import style from './index.module.css'
import {setActiveTab} from '../../../../storage/interface/actionsCreator'
import { useDispatch, useSelector } from 'react-redux';

function TabSwitcher(){

  const dispatch = useDispatch()
  const tab = useSelector(state => state.interface.tab)

  return (
    <div>
      <button
        className={`${style.todosBtn} ${tab === 'Todo' ? style.active : ''}`}
        onClick={() => dispatch(setActiveTab('Todo'))}
      >To Do</button>
      <button
        className={`${style.todosBtn} ${tab === 'Completed' ? style.active : ''}`}
        onClick={() => dispatch(setActiveTab('Completed'))}
      >Completed</button>
    </div>
  )
}

export default TabSwitcher;
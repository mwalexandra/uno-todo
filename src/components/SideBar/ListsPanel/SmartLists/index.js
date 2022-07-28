import { useDispatch, useSelector } from 'react-redux';
import {setActiveTab} from '../../../../storage/interface/actionsCreator'
import style from './index.module.css'

function SmartLists(){
  const dispatch = useDispatch();

  const tab = useSelector(state => state.interface.tab);

  return (
    <>
      <ul className={style.smartLists}>
        <li 
          className={`${style.smartListItem} ${tab === 'Importants' ? style.selected : ''}`}
          onClick={() => dispatch(setActiveTab('Importants'))}
        >
          <span className={`${style.icon} ${style.importantIcon}`}></span>
          <p>Important</p>
          <span className={`${style.icon} ${style.arrow}`}></span>
        </li>
        <li 
          className={`${style.smartListItem} ${tab === 'Todos' ? style.selected : ''}`}
          onClick={() => dispatch(setActiveTab('Todos'))}
        >
          <span className={`${style.icon} ${style.tasksIcon}`}></span>
          <p>Tasks</p>
          <span className={`${style.icon} ${style.arrow}`}></span>
        </li>
      </ul>
    </>
  )
}

export default SmartLists;
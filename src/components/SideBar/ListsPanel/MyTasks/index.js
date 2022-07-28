import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {selectListId} from '../../../../storage/interface/actionsCreator'

function MyTasks(){
  const dispatch = useDispatch();

  const lists = useSelector(state => state.lists.content)
  const listId = useSelector(state => state.interface.listId);

  //TODO не рендарятся после добавления листа
  return (
      <ul className={style.myTasks}> 
        {
          lists.map(list => 
            <li 
              className={`${style.myTasksItem} ${list.id === listId ? style.selected : ''}`}
              onClick={() => dispatch(selectListId(list.id))}
              key={list.id}
            >
              <span className={`${style.icon} ${style.listIcon}`}></span>
              <p>{list.header}</p>
              <span className={`${style.icon} ${style.arrow}`}></span>
            </li>)
          }
      </ul>
  )
}

export default MyTasks;
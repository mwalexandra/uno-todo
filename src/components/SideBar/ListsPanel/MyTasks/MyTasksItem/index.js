import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {selectListId} from '../../../../../storage/interface/actionsCreator'
import style from './index.module.css'

function MyTasksItem({list}){
  const dispatch = useDispatch();
  const listId = useSelector(state => state.interface.listId)

  useEffect(() => {}, [listId])

  return (
    <li 
      className={`${style.myTasksItem} ${list.id === listId ? style.selected : ''}`}
      onClick={() => dispatch(selectListId(list.id))}
      key={list.id}
    >
      <span className={`${style.icon} ${style.listIcon}`}></span>
      <p>{list.header}</p>
      <span className={`${style.icon} ${style.arrow}`}></span>
    </li>
  )
}

export default MyTasksItem;
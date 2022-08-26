import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {selectListId} from '../../../../../storage/interface/actionsCreator'
import style from './index.module.css'

function MyTasksItem({list}){
  const dispatch = useDispatch();
  const listId = useSelector(state => state.interface.listId)

  // TODO переделать
  //useEffect(() => {}, [listId])

  const mode = useSelector(state => state.interface.settings.mode)
  const theme = useSelector(state => state.interface.settings[mode])
  const chevron = require(`../../../../../img/${theme.chevron}.svg`);

  return (
    <li 
      className={`${style.myTasksItem} ${list.id === listId ? style.selected : ''}`}
      onClick={() => dispatch(selectListId(list.id))}
      key={list.id}
    >
      <span className={`${style.icon} ${style.listIcon}`}></span>
      <p>{list.header}</p>
      <span 
        className={`${style.icon} ${style.arrow}`} 
        style={{
          backgroundImage: `url(${chevron})`
        }}
      ></span>
    </li>
  )
}

export default MyTasksItem;